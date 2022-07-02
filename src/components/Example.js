
function Example({thiscouldbeanymeaningfulname,data, setData}){
    return (
        <>
            <h1>Many components</h1>
            <h1>{thiscouldbeanymeaningfulname}</h1>
            <h1>{data}</h1>
            <h1 onClick={()=>setData("new state")}>Many components</h1>
            <h1>Many components</h1>
            <h1>Many components</h1>
            <h1>Many components</h1>
        </>
    )
}

export default Example