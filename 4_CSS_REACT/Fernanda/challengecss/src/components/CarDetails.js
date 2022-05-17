import styles from './CarDetails.module.css'

const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2 className={styles.my_h2}>Detalhes do carro:</h2>
      <p className={styles.my_p}>Marca: {brand}</p>
      <p className={styles.my_p}>Kilometragem: {km}</p>
      <p className={styles.my_p}>Cor: {color}</p>
    </div>
  );
};

export default CarDetails;