import error from '../../images/error.svg'
import success from '../../images/success.svg'

const InfoTooltip = ({isOpen, onClose, succesfulResponse, positiveResultText, negativeResultText}) => {
  return(
    <div className={`InfoTooltip ${isOpen && "InfoTooltip_isOpen"}`}>
      <div className="InfoTooltip__content">
        <button 
          onClick={onClose} 
          type="button" 
          className="InfoTooltip__close"
        />
        <img className="InfoTooltip__image" src={ succesfulResponse ? success : error } alt="результат" />
        <p className="InfoTooltip__message">
          { succesfulResponse ? positiveResultText : negativeResultText }
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip;