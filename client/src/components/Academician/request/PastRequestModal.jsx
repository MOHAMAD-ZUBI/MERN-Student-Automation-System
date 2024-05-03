/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ModalComponent = ({ onClose, isOpen, newRequest }) => {
  // console.log(newRequest);
  return (
    <Modal backdrop={"blur"} size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <div className="font-semibold font-serif">
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-3xl">Request Details</h2>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2 text-2xl  capitalize border-t-2 border-gray-200 ">
                <div className="flex flex-row justify-evenly mt-8">
                  <h1 className="capitalize">
                    <span className="text-blue-700">Status:</span>{" "}
                    {newRequest?.status}
                  </h1>
                  <h1 className="capitalize">
                    <span className="text-blue-700">Type:</span>{" "}
                    {newRequest?.type}
                  </h1>
                </div>
                <div className="flex flex-col justify-start items-start mt-[20px] border-t-2 border-gray-200">
                  <h1 className="capitalize mt-8">
                    <span className="text-blue-700">Sender:</span>{" "}
                    {newRequest?.sender.firstName} {newRequest?.sender.lastName}
                  </h1>
                  <h1 className="capitalize">
                    <span className="text-blue-700">Content:</span>{" "}
                    {newRequest?.content}
                  </h1>
                  <h1 className="capitalize">
                    {newRequest?.file && (
                      <div>
                        <h1 className="text-blue-700 mb-2">Attachments:</h1>{" "}
                        <a
                          href={`http://localhost:3060/${newRequest?.file}`}
                          target="_blank"
                        >
                          <img alt="pdf" src="./pdf.png" />
                        </a>
                      </div>
                    )}
                  </h1>
                  <h1></h1>
                </div>
                <div className="flex flex-col justify-start items-start mt-[20px] border-t-2 border-gray-200">
                  <h1 className="capitalize mt-8">
                    <span className="text-blue-700">Reply:</span>{" "}
                    {newRequest?.receiverReply}
                  </h1>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
