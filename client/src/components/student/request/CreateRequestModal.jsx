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
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [studentLecturers, setStudentLecturers] = useState(null);

  // form data
  const [file, setFile] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleReceiverChange = (event) => {
    setReceiver(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await api.get(`/request/student/lecturers`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudentLecturers(request.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleSendData = async () => {
    setLoading(true);
    try {
      const formData = new FormData(); // Create FormData object
      formData.append("type", type);
      formData.append("content", content);
      formData.append("receiver", receiver);
      formData.append("file", file); // Append the file to FormData
      const response = await api.post(
        "/request/create",
        formData, // Pass FormData instead of an object
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important to set the content type
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setResponseMessage("Request was sent successfully"); // Set success message
      } else {
        setResponseMessage("An error occurred."); // Set error message
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

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
                  <div className="w-full border-t-2 border-gray-200 flex flex-col gap-2 mt-4">
                    <label htmlFor="titleInput">Receiver</label>
                    <select
                      id="titleInput"
                      className="outline-none rounded-lg py-2 px-1 bg-gray-200  text-black capitalize"
                      value={receiver}
                      onChange={handleReceiverChange}
                    >
                      <option value="">Select receiver</option>
                      {studentLecturers?.map((studentLecturer) => (
                        <option
                          className="capitalize"
                          key={studentLecturer.user._id}
                          value={studentLecturer.user._id}
                        >
                          {studentLecturer.user.firstName}{" "}
                          {studentLecturer.user.lastName}
                        </option>
                      ))}
                      {/* map */}
                    </select>
                    <label htmlFor="titleInput">Request Type</label>
                    <select
                      id="titleInput"
                      className="outline-none rounded-lg py-2 px-1 bg-gray-200  text-black"
                      value={type}
                      onChange={handleTypeChange}
                    >
                      <option value="">Select request type</option>
                      <option value="internship">Internship</option>
                      <option value="gradeObjection">Grade Objection</option>
                      <option value="recommendationLetter">
                        Recommendation Letter
                      </option>
                    </select>

                    <label htmlFor="descInput">Request Content</label>
                    <textarea
                      className="outline-none rounded-lg py-2 px-1 bg-gray-200  text-black"
                      id="descInput"
                      placeholder="Request content here"
                      value={content}
                      onChange={handleContentChange}
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
                isDisabled={!content || !type || !receiver}
                onClick={handleSendData}
                isLoading={loading}
              >
                Send
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
