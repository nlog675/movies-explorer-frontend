import error from '../../images/error.svg'
import success from '../../images/success.svg'

const InfoTooltip = ({isOpen, onClose, registered, positiveResultText, negativeResultText}) => {
  return(
    <div className={`InfoTooltip ${isOpen && "InfoTooltip_isOpen"}`}>
      <div className="InfoTooltip__content">
        <button 
          onClick={onClose} 
          type="button" 
          className="InfoTooltip__close"
        />
        <img className="InfoTooltip__image" src={ registered ? success : error } alt="результат" />
        <p className="InfoTooltip__message">
          { registered ? positiveResultText : negativeResultText }
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip;