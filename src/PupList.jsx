import ListItem from "./ListItem"

const PupList = ({ puppyList, filterText }) => {
  return (
    <div className="list">
      {
        puppyList.filter(puppy => {
          return filterText === "" ||
            puppy.name.toLowerCase().includes(filterText)
        }).map(puppy => {
          return (
            <ListItem
              key={puppy.id}
              puppy={puppy}
            />
          )
        })
      }
    </div>
  )
}

export default PupList