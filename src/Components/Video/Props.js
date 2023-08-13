function Student(props)
{
console.warn(props)
    return (
        <div style={{backgroundColor: "skyblue",margin:10}}>
            <h1>Hello {props.name}</h1>
            <p>email: {props.email}</p>
            <p>address: {props.other}</p>
        </div>
    )
}

export default Student