import { useLocation, useNavigate} from "react-router-dom"; // To manage query params
import { useEffect, useState } from "react";
import { category } from "@service";
import { Table,Search } from "@components";

const Index = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0); // To store the total number of items
  const location = useLocation()
  const navigate = useNavigate()
  // Initialize pagination state from query params
  const val = new URLSearchParams(location.search)
  const [params, setParams] = useState({
    search: val.get('search') ||'',
    page: 1,
    limit: 10,
  });

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

  useEffect(()=>{
    const params = new URLSearchParams(location.search)
    const page = params.get("page")
    const limit = params.get('limit')
    const input_val = params.get("search")
    const find = input_val ? input_val : ""
    const pageNumber = page ? parseInt(page) : 1
    const limitPage = limit ? parseInt(limit) : 10
    setParams(prevParams =>({
      ...prevParams,
      page: pageNumber,
      search: find,
      limit: limitPage
    }))
  },[location.search])
  // Handle table pagination changes
  const handleTableChange = (pagination: any) => {
    const { current = 1, pageSize = 10 } = pagination;
    // Update pagination parameters and set them in the URL query params
    setParams((prev) => ({
      ...prev,
      page: current,
      limit: pageSize,
    }));
    const searchParams = new URLSearchParams(location.search)
       searchParams.set("page", `${current}`)
       searchParams.set("limit", `${pageSize}`)
       navigate(`?${searchParams}`)
  };

  const columns: any = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
  ];
  
  return (
    <div>
      <h1>Categories</h1>
      <Search params={params} setParams={setParams}/>
      <Table
        data={data}
        columns={columns}
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
