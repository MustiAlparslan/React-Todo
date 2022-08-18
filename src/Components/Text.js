export default class Text extends Component {
  render() {
    return (
        <div>
            <input type="text" onChange={(e) => setTodo(e.target.value)}/>
        </div>
    )
  }
}
