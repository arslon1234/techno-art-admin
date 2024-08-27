import Notification from "../../utils/notification"
const Index = () => {
    const openToast =()=>{
        Notification({type:"info", message:"Hammasi yaxshi", description: "Qanday qiymat berish mumkun"})
    }
  return (
    <div>
      <h1>Products</h1>
      <button onClick={openToast}>open toast</button>
    </div>
  )
}

export default Index
