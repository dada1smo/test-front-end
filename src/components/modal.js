import { AnimatePresence, motion } from "framer-motion";
import "../styles/modal.scss";
import { Button } from "./button";
import Typography from "./typography";

export default function Modal({
  modal,
  setModal,
  children,
  title,
  buttonLabel,
}) {
  return (
    <AnimatePresence>
      {modal && (
        <div className="modalWrapper">
          <motion.div
            className="modal"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -50,
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="modalHeader">
              <Typography tag="h2">{title}</Typography>
            </div>
            <div className="overflow">{children}</div>
            <div className="modalFooter">
              <Button
                color="btnPrimaryBlue"
                shape="btnFull"
                label={buttonLabel}
                onClick={() => setModal((modal) => !modal)}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
