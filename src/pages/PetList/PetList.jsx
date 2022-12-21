export default function PetList({ pets, name, handleDelete }) {

    return (
        <>
        <h1>{ name }</h1>
        <ul className='container'>
          {pets.map((p) =>
        <div className="card" key={p.id}>
            <li>Name: {p.pet}</li>
            <li>D.O.B:{p.firstYear}</li>
            <li>D.O.D:{p.lastYear} </li>
            <li>Destcription:{p.description}</li>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
          )}
        </ul>
        </>
    );
}