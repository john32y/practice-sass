export default function Box() {

  return (
    <div className="box-container">
      <h1>BOX H1</h1>
      <h2>BOX H2</h2>
      <h3>BOX H3</h3>

      <div className="box-child">
        <h4>BOX GRANDCHILD</h4>

        <div className="box-grandchild">
          <p>Box Grandchild</p>
        </div>
      </div>

      <div className="box-child2">
        <div className="box-granchild">
          <p>Box grandchild 2</p>
        </div>
      </div>
    </div>
  )
}