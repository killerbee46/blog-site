

const Container = ({children,verticalSpace}:any) => {
  return (
    <div className={`px-[5%] my-[${verticalSpace ?? 0}px]`}>
        {children}
    </div>
  )
}

export default Container