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

const ModalComponent = ({ onClose, isOpen, courseId }) => {
  const admin = sessionStorage.getItem("admin");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const { token } = useAuth();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSendData = async () => {
    console.log({ title, description, file });
    setLoading(true);
    try {
      const formData = new FormData(); // Create FormData object
      formData.append("course", courseId);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("Note", file); // Append the file to FormData
      const response = await api.post(
        "/course/uploadNote",
        formData, // Pass FormData instead of an object
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important to set the content type
          },
        }
      );

      // Assuming the data you want is in the response's 'data' field
      console.log("Response data:", response.data);
      if (response.status >= 200 && response.status < 300) {
        setResponseMessage("Note uploaded successfully!"); // Set success message
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
        <div className="font-semibold font-serif">
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-3xl">Upload Note</h2>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2 text-2xl  capitalize border-t-2 border-gray-200 ">
              <div className="flex flex-row justify-evenly mt-8">
                <div className="w-full border-t-2 border-gray-200 flex flex-col gap-2 mt-4">
                  <label htmlFor="titleInput">File Title</label>
                  <input
                    id="titleInput"
                    className="outline-none rounded-lg py-2 px-1 bg-gray-200  text-black"
                    type="text"
                    placeholder="File title here"
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <label htmlFor="descInput">File Description</label>
                  <input
                    className="outline-none rounded-lg py-2 px-1 bg-gray-200  text-black"
                    id="descInput"
                    type="text"
                    placeholder="File description here"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <label htmlFor="fileInput"> File</label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                  <div className="text-2xl mt-2">{responseMessage}</div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              color="primary"
              isDisabled={!file}
              onClick={handleSendData}
              isLoading={loading}
            >
              Action
            </Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
