// import { category } from "@service";
// import { useEffect, useState } from "react";
// import {Table} from "@components";

// const Index = () => {
//   const [data, setData] = useState([]);
//   const [params, setParams] = useState({
//     search: '',
//     page: 1,
//     limit: 10, // Fixed limit
//   });
//   const [total, setTotal] = useState(0); // To store the total number of items

//   const getData = async () => {
//     try {
//       const response = await category.get(params);
//       if (response.status === 200) {
//         setData(response?.data?.data?.categories);
//         setTotal(response?.data?.data?.count); // Ensure total count is provided by the API
//       }
//     } catch (err: any) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [params]); // Fetch data whenever the page changes

//   const handleTableChange = (pagination: any) => {
//     const { current } = pagination;

//     // Only update the page, keeping the limit unchanged
//     setParams((prev) => ({
//       ...prev,
//       page: current || 1,  // Update to the current page
//     }));
//   };

//   return (
//     <div>
//       <h1>Categories</h1>
//       <Table
//         data={data}
//         pagination={{
//           current: params.page,
//           pageSize: 10, // Fixed page size
//           total: total, // Total number of items for correct page calculation
//           showSizeChanger: false, // Disable page size changer
//         }}
//         onChange={handleTableChange}
//       />
//     </div>
//   );
// };

// export default Index;


import { category } from "@service";
import { useEffect, useState } from "react";
import {Table} from "@components"; // Ensure the path is correct

const Index = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    search: '',
    page: 1,
    limit: 10,
  });
  const [total, setTotal] = useState(0); // To store the total number of items

  const getData = async () => {
    try {
      const response = await category.get(params);
      if (response.status === 200) {
        setData(response?.data?.data?.categories);
        setTotal(response?.data?.data?.count); // Assuming the total count is provided by the API
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [params]); // Fetch data whenever params change

  const handleTableChange = (pagination: any) => {
    const { current = 1, pageSize = 10 } = pagination;

    // Update params with the new pagination data
    setParams((prev) => ({
      ...prev,
      page: current,
      limit: pageSize,
    }));
  };

  return (
    <div>
      <h1>Categories</h1>
      <Table
        data={data}
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: total,
          showSizeChanger: true,
          pageSizeOptions: ['2', '5', '7', '10'],
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Index;
