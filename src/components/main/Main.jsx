import React,{ useState} from 'react'
import styles from './Main.module.css'
const Main=()=>{
    const[color,SetColor]=useState("")
const[inputText,setInputText]=useState('')
const [buttons,setButtons]=useState([])
return (
    <>
    <h1 className={styles.head}>Color Picker</h1>
    <div className={styles.ip}>
    <input  type='text'value={inputText}onChange={(e)=>{setInputText(e.target.value)}}></input><span><button className={styles.btn}onClick={(e)=>{
    SetColor(inputText)
    setButtons((prbs) => [...prbs, inputText]);
    setInputText('');
    }}>Add Color</button></span>
    </div>
    <div className={styles.maindiv} >
             <div className={styles.box}style={{backgroundColor:color,borderColor:color}}></div>
         
    </div>
    <div className={styles.smallbox}>
    <button className={styles.clr}id={styles.red}value="red"onClick={(e)=>{
        SetColor(e.target.value)
       
    }}></button>
    <button className={styles.clr}id={styles.blue}value="blue"onClick={(e)=>{
        SetColor(e.target.value)
       
    }}></button>
    <button className={styles.clr}id={styles.green}value="green"onClick={(e)=>{
        SetColor(e.target.value)
      
    }}></button>
    <button className={styles.clr}id={styles.pink}value="pink"onClick={(e)=>{
                SetColor(e.target.value)

    }}></button>
    <button className={styles.clr}id={styles.orange}value="orange"onClick={(e)=>{
        SetColor(e.target.value)
   
    }}></button>
  {buttons.map((buttonColor, index) => (
          <button
            key={index}
            className={styles.clr}
            style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
            value={buttonColor}
            onClick={(e)=>{
                SetColor(e.target.value)
           
            }}></button>
        ))}



    </div>

    </>
)

}
export default Main