const ProgramCard = ({ program }: { program: { title: string, description: string, day: string, time: string } }) => {
  return (
    <div className="flex flex-col items-start justify-center p-6 md:p-8 min-h-[200px] bg-white dark:bg-_gray rounded-md">
      <h4 className="font-bold text-_blue dark:text-white">{program.title}</h4>
      <hr className="border-_blue dark:border-_blue w-full" />
      <p className="my-4 text-_gray dark:text-white">{program.description}</p>
      <div className="w-full flex border border-_gray dark:border-white rounded">
        <div className="bg-_gray dark:bg-white flex items-center">
          <p className=" text-white dark:text-_gray p-2 w-full pl-1">{program.day}</p>
        </div>
        <div className="bg-white dark:bg-_gray flex-1 flex items-center">
          <p className=" text-_gray dark:text-white p-2 w-full pl-1">{program.time}</p>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard