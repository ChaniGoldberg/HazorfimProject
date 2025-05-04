import branches_picture from '../../assests/BranchesOfNav1/branches_picture.png'
import branches1 from '../../assests/BranchesOfNav1/branches1.png'
import branches2 from '../../assests/BranchesOfNav1/branches2.png'
import branches3 from '../../assests/BranchesOfNav1/branches3.png'
import '../../styles/Branches.css'

function Branches() {

    return (
       <>
       <img src={branches_picture} className="branches_picture" alt="branches_picture" />      
       <img src={branches1} className="branches_picture" alt="branches_picture" />      
       <img src={branches2} className="branches_picture" alt="branches_picture" />      
       <img src={branches3} className="branches_picture" alt="branches_picture" />      
       <p>b"h will be good!!!</p>
        </>
    )
 }
 export default Branches;