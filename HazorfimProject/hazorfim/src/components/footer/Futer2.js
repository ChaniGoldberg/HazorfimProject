import futerP1 from '../../assests/futer/futerP1'


function Futer2() {

    return (
       <>
       <h3>הצטרפו לרשימת הדיוור שלנו, לקבלת הטבות ומבצעים</h3>     
       <input type="email" placeholder="הכנס את המייל שלך" className="emailInput"/>
       <div>
       <checkbox className="checkbox" type="checkbox" id="checkbox" name="checkbox" value="checkbox"/>
       <label className="checkboxLabel" for="checkbox">אני מאשר קבלת דיוור שיווקי</label>
       </div>
        </>
    )
 }
 export default Futer2