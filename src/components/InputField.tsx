import '../Styles/input.css'

const InputField = () => {
  return <form>
    <input type='input' placeholder='Enter a task' className='input_box'/>
    <button className="input_submit" type="submit">GO</button>
  </form>
}

export default InputField