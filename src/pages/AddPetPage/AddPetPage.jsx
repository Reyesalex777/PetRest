import './AddPetPage.css';
export default function AddPetPage() {
  return (
// form to add a pet
  <>
    <h1>Add your Pet</h1>
    <form>
      <input className='firstYear' type="text" placeholder="First Year" pattern="\d{4, 4}" />
      <input className='name' type="text" placeholder="Name" required />
      <input className='lastYear' type="text" placeholder="Last Year" pattern="\d{4, 4}" />
      <textarea placeholder='Say a few words or your favorite story with them'></textarea>
      <button type="submit" >Add</button>
    </form>
  </>
  );
}