type CommonLayoutProps = {
  children: React.ReactNode
}

const CommonLayout = (prop: CommonLayoutProps): JSX.Element => {
  return (
    <>
      <main>{ prop.children }</main>
    </>
  )
}