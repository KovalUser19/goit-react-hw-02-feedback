import css from './Section.module.css'
export const Section = (props) => {
  console.log(props);
    return (
      <div className={css.section}>
        <h2>{ props.title}</h2>
        {props.children}
      </div>
    )
  }
