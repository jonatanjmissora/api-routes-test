export const AccountDataData = ({account}) => {
    return (
        <section className="flex-1 flex flex-col justify-center items-center">
        <h2>ACCOUNT DATA:</h2>
        <p>{JSON.stringify(account, null, 2)}</p>
      </section>
    )
}