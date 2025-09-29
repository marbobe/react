export default function CoreConcept({image, title, description}){ //target properties del objeto con nombre, se desestructura el objeto con {}
    return <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }