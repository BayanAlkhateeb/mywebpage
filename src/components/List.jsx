
const List = (props) => {
    const fruits = [
        { id: 1, name: 'orange', calories: 95 },
        { id: 2, name: 'pineapple', calories: 64 },
        { id: 3, name: 'strawberry', calories: 33 },
        { id: 4, name: 'kiwi', calories: 85 },
        { id: 5, name: 'banana', calories: 78 },
        { id: 6, name: 'apple', calories: 49 },

    ]

    const veg = [
        { id: 1, name: 'cucumber', calories: 95 },
        { id: 2, name: 'carrots', calories: 64 },
        { id: 3, name: 'potato', calories: 33 },
        { id: 4, name: 'corn', calories: 85 },
        { id: 5, name: 'tomaito', calories: 78 },
    ]

    // const newarr = props.arr.filter((f) => f.name.includes('e'))

    const newfruits = props.arr.map((f, i) => <div className = "c1" key={i}>
        <p> {f.name} </p>
        <p> {f.calories} </p>

    </div> )

    return (
        <>
            <ul>
                {newfruits}
            </ul>
        </>
    )
}

export default List

