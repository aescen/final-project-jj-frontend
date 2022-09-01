import EmoneyModal from './EmoneyModal';
import VirtualBankModal from './VirtualBankModal';
import CreditDebitModal from './CreditDebitModal';

const PaymentModal = (props) => {
  const { payment } = props;
  return (
    <>
      {payment.option === 'emoney' ? (
        <EmoneyModal {...props} />
      ) : payment.option === 'vbank' ? (
        <VirtualBankModal {...props} />
      ) : payment.option === 'ccdc' ? (
        <CreditDebitModal {...props} />
      ) : (
        <></>
      )}
    </>
  );
};

export default PaymentModal;
