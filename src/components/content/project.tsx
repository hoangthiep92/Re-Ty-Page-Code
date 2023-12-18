import { Button, Modal } from 'antd'
import { useState } from 'react';
import { IoLogoReact } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        technology: string;
        member: number;
        role: string;
        demo: string;
        guthub: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [dataDetail, setDataDetail] = useState<IProject | null>(null)

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const dataProjects: IProject[] = [
        {
            image: <IoLogoReact
                size={50}
                color={'#2bebfd'}
            />,
            title: "Website clone 1",
            shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "(Sefl - learning) 1", //mieu ta du an lam gi
                technology: "React (typescript) 1", //cong nghe su dung
                member: 1, //bao nhieu member
                role: "Developer 1", // vai tro trong du an
                demo: "??? 1", //link video, link deploy
                guthub: "??? 1" // link github
            }
        },
        {
            image: <IoLogoReact
                size={50}
                color={'#2bebfd'}
            />,
            title: "Website clone 2",
            shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "(Sefl - learning) 2", //mieu ta du an lam gi
                technology: "React (typescript) 2", //cong nghe su dung
                member: 1, //bao nhieu member
                role: "Developer 2", // vai tro trong du an
                demo: "??? 2", //link video, link deploy
                guthub: "??? 2" // link github
            }
        },
        {
            image: <IoLogoReact
                size={50}
                color={'#2bebfd'}
            />,
            title: "Website clone 3",
            shortDescription: "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
            detail: {
                description: "(Sefl - learning) 3", //mieu ta du an lam gi
                technology: "React (typescript) 3", //cong nghe su dung
                member: 1, //bao nhieu member
                role: "Developer 3", // vai tro trong du an
                demo: "??? 3", //link video, link deploy
                guthub: "??? 3" // link github
            }
        }
    ]

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    }

    return (
        <>
            <>
                {/* modal giup tao trang ao tren trang dang xem */}
                <Modal
                    title={dataDetail && dataDetail.title ? `Project ${dataDetail.title}` : ""}
                    open={isModalOpen}
                    onOk={() => handleCloseModal()}
                    onCancel={() => handleCloseModal()}
                    footer={null}
                    maskClosable={false}
                >
                    {dataDetail &&
                        <ul>
                            <li>description: {dataDetail.detail.description}</li>
                            <li>technology: {dataDetail.detail.technology}</li>
                            <li>member: {dataDetail.detail.member}</li>
                            <li>role: {dataDetail.detail.member}</li>
                            <li>demo: {dataDetail.detail.demo}</li>
                            <li>guthub: {dataDetail.detail.guthub}</li>
                        </ul>
                    }
                </Modal>
            </>
            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Projects</h3>
                            <span>Meet our amazing projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div className="inner"
                                                title='view_more'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setDataDetail(item)
                                                    setIsModalOpen(true)
                                                }}
                                            >
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className='view_detail'
                                                    style={{ padding: "5px 0" }}
                                                >
                                                    <span style={{ cursor: "pointer" }}>
                                                        <FaLongArrowAltRight />
                                                        &nbsp;
                                                        View more ...
                                                    </span>

                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;