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
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const ModalComponent = ({ onClose, isOpen }) => {
  const admin = sessionStorage.getItem("admin");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [title, setTitle] = useState("");
  const [students, setStudents] = useState([]);
  const [studentSearch, setStudentSearch] = useState("");
  const [studentsToAdd, setStudentsToAdd] = useState([]);

  const handleStudentAddition = (id) => {
    setStudentsToAdd([...studentsToAdd, id]);
  };

  const handleStudentSearch = (event) => {
    const filteredStudents = students.filter((student) =>
      student.registerNo
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setStudents(filteredStudents);
    console.log({ filteredStudents });
  };

  const { token } = useAuth();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  /*
  {
  "title": "test",
  "lecturer": "6633d2adc979bb9fd9f458bf",
  "students": ["658adabbf2ae9d4ceaf477ca"]
}
  */

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get(`/senior/lecturer/students`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) setStudents(response.data.students);
      } catch (error) {
        console.log(error.message);
      } finally {
        //setIsLoaded(false);
      }
    };
    fetchStudents();
  }, [token, studentSearch]);
  const handleSendData = async () => {
    let studentIds = [];
    studentIds.push(...studentsToAdd.map((student) => student._id));

    setLoading(true);
    try {
      const response = await api.post(
        "/senior/create",
        { title: title, students: studentIds }, // Pass FormData instead of an object
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  return (
    <Modal backdrop={"blur"} size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <div className="font-semibold font-serif">
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-3xl">Create Group</h2>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2 text-2xl  capitalize border-t-2 border-gray-200 ">
              <div className="flex flex-row justify-evenly mt-8">
                <div className="w-full border-t-2 border-gray-200 flex flex-row-reverse justify-evenly  mt-4">
                  <div className="flex flex-col justify-center gap-2">
                    <h1 className=" text-blue-700">Student List</h1>
                    <div className="  border-2 border-gray-300 min-w-[400px] rounded-lg p-2 flex flex-col gap-2 font-mono text-black">
                      <input
                        type="search"
                        placeholder="Search student"
                        onChange={(e) => handleStudentSearch(e)}
                        disabled={true}
                        className="outline-none rounded-lg py-2 px-2 border-1 border-gray-300 placeholder:text-md placeholder:font-mono"
                      />
                      {students.map((student) => {
                        return (
                          <span
                            key={student._id}
                            className=" hover:bg-green-200 duration-150 border-b-1 border-gray-200 flex flex-row justify-between "
                          >
                            <div className="flex flex-col">
                              <h1>
                                {student.firstName} {student.lastName}
                              </h1>
                              <p className="text-sm">{student.registerNo}</p>
                            </div>
                            <div
                              className="flex items-center cursor-pointer text-green-500 "
                              onClick={() => handleStudentAddition(student)}
                            >
                              {" "}
                              <IoAddCircleOutline />
                            </div>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h1>Selected Students</h1>
                    <div>
                      {studentsToAdd.map((student) => {
                        return (
                          <div
                            key={student._id}
                            className=" hover:bg-green-200 duration-150 border-b-1 border-gray-200 flex flex-row justify-between "
                          >
                            <div className="flex flex-col">
                              <h1>
                                {student.firstName} {student.lastName}
                              </h1>
                              <p className="text-sm">{student.registerNo}</p>
                            </div>
                            <div className="flex items-center cursor-pointer text-red-500 ">
                              {" "}
                              <IoRemoveCircleOutline />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary">Submit</Button>
          </ModalFooter>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
