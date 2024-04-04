import ListItem from "./ListItem"

const PupList = ({sorted, sortedList, puppyList, filterText }) => {
  return (
    <div className="list">
      {
        sorted?
        sortedList.filter(puppy => {
          return filterText === "" ||
            puppy.name.toLowerCase().includes(filterText)
        }).map(puppy => {
          return (
            <ListItem
              key={puppy.id}
              puppy={puppy}
            />
          )
        }):
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