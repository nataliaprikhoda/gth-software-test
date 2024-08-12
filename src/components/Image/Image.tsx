import styles from './Image.module.css';

export const Image = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return <img {...props} className={styles.image} />;
};
