import ProgramCard from "./molecules/ProgCard"

const Weekly = () => {
  const meetings = [
    { title: "Sunday Service", description: "Miracle service", day: "Every sunday", time: "09:00am - 12:00pm" },
    { title: "Bible Studies", description: "Word Explosion", day: "Every Tuesday", time: "05:00pm - 06:30pm" },
    { title: "Healing service", description: "Thank God its Thursday", day: "Every Thursday", time: "05:00pm - 07:00pm" }
  ]
  return (
    <div className="flex flex-col w-full my-6 min-h-fit">
      <div className="text-_deep_blue dark:text-white h-10 w-full px-3">
        <h3 className="text-xl md:text-2xl font-bold self-center px-4 border-b border-b-_blue dark:border-b-white">Worship with us!</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-3 px-3 py-3 w-5/6 md:w-3/4 self-center">
        {
          meetings.map(item => (<ProgramCard key={item.description + item.title} program={{
            title: item.title,
            description: item.description,
            day: item.day,
            time: item.time
          }} />))
        }
      </div>
    </div>
  )
}

export default Weekly