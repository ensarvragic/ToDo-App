import '../Styles/input.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.Fc<Props> = ({ todo, setTodo }) => {
  return <form className='input'>
    <input 
    type='input'
    value={todo}
    onChange={(e) => setTodo(e.target.value)} 
    placeholder='Enter a task' 
    className='input_box'/>
    <button className="input_submit" type="submit">GO</button>
  </form>
}

export default InputField