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
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../utils/Request";

const ModalComponent = ({ onClose, isOpen, newRequest }) => {
  const admin = sessionStorage.getItem("admin");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const { token } = useAuth();
  const handleSendData = async () => {
    setLoading(true);
    try {
      const response = await api.put(
        `/request/reply/${newRequest?._id}`,
        { reply: textAreaValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Assuming the data you want is in the response's 'data' field
      console.log("Response data:", response.data);
      if (response.status >= 200 && response.status < 300) {
        setResponseMessage("Reply was sent successfully"); // Set success message
      } else {
        setResponseMessage("An error occurred."); // Set error message
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
    console.log(textAreaValue);
  };

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
                  <h1 className="capitalize ">
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
                  <div className="w-full border-t-2 border-gray-200 mt-4"></div>
                  <h1 className=" mt-4 mb-2">Send a Reply</h1>
                  <textarea
                    className="w-full p-2 border-2 border-gray-200 rounded"
                    rows="5"
                    value={textAreaValue}
                    onChange={handleTextAreaChange}
                  ></textarea>
                  <div className="text-2xl mt-2">{responseMessage}</div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                isDisabled={!textAreaValue}
                onClick={handleSendData}
                isLoading={loading}
              >
                Action
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
