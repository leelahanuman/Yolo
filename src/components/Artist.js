import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import getAllMusicApi from "../api/getAllMusicApi";
import { Link } from "react-router-dom";
import playlist from "../playlist"

const Artist = () => {
  const [music, setMusic] = useState([]);
  const retreiveMusic = async () => {
    const response = await getAllMusicApi();
    setMusic(response);
  };
  useEffect(() => {
    retreiveMusic();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark">
        <div className="container-fluid">
          <a className="flex items-center widtth" data-testid="headerLogo" href="/">
          <span className="w-8 h-8 lg:w-12 lg:h-12"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="auto" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="url(#paint0_linear_1943_5392)"></rect><rect width="48" height="48" rx="24" fill="url(#paint1_linear_1943_5392)" fill-opacity="0.2"></rect><rect width="48" height="48" rx="24" fill="url(#paint2_linear_1943_5392)" fill-opacity="0.6"></rect><path d="M11.3507 25.7738H10.4395C10.5407 18.3826 16.2107 12.4088 23.5007 12.4088C23.6019 12.4088 23.6019 12.4088 23.6019 12.4088V13.3201C23.5007 13.3201 23.5007 13.3201 23.5007 13.3201C16.8182 13.3201 11.3507 18.8888 11.3507 25.7738ZM30.1832 17.3701L30.0819 18.6863C32.0057 20.4076 33.2207 22.9388 33.2207 25.7738C33.2207 31.0388 28.9682 35.3926 23.7032 35.3926C18.4382 35.3926 14.1857 31.0388 14.1857 25.7738C14.1857 20.5088 18.5395 16.1551 23.7032 16.1551C24.7157 16.1551 25.6269 16.3576 26.5382 16.6613L26.6394 15.6488C25.7282 15.3451 24.6144 15.2438 23.6019 15.2438C17.7295 15.1426 13.072 19.9013 13.072 25.7738C13.072 31.6463 17.932 36.4051 23.7032 36.4051C29.4744 36.4051 34.2332 31.6463 34.2332 25.7738C34.2332 22.3313 32.6132 19.2938 30.1832 17.3701ZM29.7782 21.0151L29.5757 23.1413C29.9807 23.9513 30.1832 24.8626 30.1832 25.8751C30.1832 29.4188 27.2469 32.4563 23.7032 32.4563C20.0582 32.4563 17.2232 29.4188 17.2232 25.8751C17.2232 22.3313 20.1595 19.2938 23.7032 19.2938C24.6144 19.2938 25.4244 19.4963 26.2344 19.8001L26.3357 18.4838C25.5257 18.1801 24.6144 17.9776 23.6019 17.9776C19.3495 17.9776 15.907 21.4201 15.907 25.7738C15.907 30.1276 19.3495 33.5701 23.6019 33.5701C27.8544 33.5701 31.2969 30.0263 31.2969 25.7738C31.3982 24.0526 30.7907 22.3313 29.7782 21.0151ZM28.3607 10.0801L26.8419 23.6476C26.8419 23.6476 25.1207 22.1288 22.6907 22.8376C20.362 23.5463 20.1595 25.2676 20.1595 25.6726C20.1595 26.4826 20.7669 28.6088 23.5007 29.0138C26.8419 29.4188 27.7532 27.3938 27.8544 26.6851C28.0569 25.9763 28.8669 18.1801 28.8669 18.1801L29.2719 13.9276C29.2719 13.9276 31.6007 13.8263 32.8157 14.9401C33.9294 16.0538 33.5244 17.4713 33.3219 18.0788C33.1194 18.5851 32.8157 18.9901 33.2207 18.8888C33.5244 18.7876 34.4357 17.8763 34.6382 16.8638C34.9419 14.8388 33.3219 13.8263 33.1194 13.5226C32.9169 13.2188 30.9932 12.1051 30.6894 11.8013C30.3857 11.4976 29.8794 10.8901 29.8794 10.2826L28.3607 10.0801Z" fill="#040404" fill-opacity="0.2"></path><path d="M12.1603 25.7738H11.249C11.3503 18.3826 17.0203 12.4088 24.3103 12.4088C24.4115 12.4088 24.4115 12.4088 24.4115 12.4088V13.3201C24.3103 13.3201 24.3103 13.3201 24.3103 13.3201C17.6278 13.3201 12.1603 18.8888 12.1603 25.7738ZM30.9928 17.3701L30.8915 18.6863C32.8153 20.4076 34.0303 22.9388 34.0303 25.7738C34.0303 31.0388 29.7778 35.3926 24.5128 35.3926C19.2478 35.3926 14.9953 31.0388 14.9953 25.7738C14.9953 20.5088 19.349 16.1551 24.5128 16.1551C25.5253 16.1551 26.4365 16.3576 27.3478 16.6613L27.449 15.6488C26.5378 15.3451 25.424 15.2438 24.4115 15.2438C18.539 15.1426 13.8815 19.9013 13.8815 25.7738C13.8815 31.6463 18.7415 36.4051 24.5128 36.4051C30.284 36.4051 35.0428 31.6463 35.0428 25.7738C35.0428 22.3313 33.4228 19.2938 30.9928 17.3701ZM30.5878 21.0151L30.3853 23.1413C30.7903 23.9513 30.9928 24.8626 30.9928 25.8751C30.9928 29.4188 28.0565 32.4563 24.5128 32.4563C20.8678 32.4563 18.0328 29.4188 18.0328 25.8751C18.0328 22.3313 20.969 19.2938 24.5128 19.2938C25.424 19.2938 26.234 19.4963 27.044 19.8001L27.1453 18.4838C26.3353 18.1801 25.424 17.9776 24.4115 17.9776C20.159 17.9776 16.7165 21.4201 16.7165 25.7738C16.7165 30.1276 20.159 33.5701 24.4115 33.5701C28.664 33.5701 32.1065 30.0263 32.1065 25.7738C32.2078 24.0526 31.6003 22.3313 30.5878 21.0151ZM29.1703 10.0801L27.6515 23.6476C27.6515 23.6476 25.9303 22.1288 23.5003 22.8376C21.1715 23.5463 20.969 25.2676 20.969 25.6726C20.969 26.4826 21.5765 28.6088 24.3103 29.0138C27.6515 29.4188 28.5628 27.3938 28.664 26.6851C28.8665 25.9763 29.6765 18.1801 29.6765 18.1801L30.0815 13.9276C30.0815 13.9276 32.4103 13.8263 33.6253 14.9401C34.739 16.0538 34.334 17.4713 34.1315 18.0788C33.929 18.5851 33.6253 18.9901 34.0303 18.8888C34.334 18.7876 35.2453 17.8763 35.4478 16.8638C35.7515 14.8388 34.1315 13.8263 33.929 13.5226C33.7265 13.2188 31.8028 12.1051 31.499 11.8013C31.1953 11.4976 30.689 10.8901 30.689 10.2826L29.1703 10.0801Z" fill="url(#paint3_linear_1943_5392)"></path><defs><linearGradient id="paint0_linear_1943_5392" x1="27.6" y1="11.2" x2="27.6" y2="49.2" gradientUnits="userSpaceOnUse"><stop stop-color="#FF685E"></stop><stop offset="1" stop-color="#DC1C4A"></stop></linearGradient><linearGradient id="paint1_linear_1943_5392" x1="41.2" y1="40" x2="6.4" y2="3.6" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5E98" stop-opacity="0"></stop><stop offset="1" stop-color="#8711E3" stop-opacity="0.83"></stop></linearGradient><linearGradient id="paint2_linear_1943_5392" x1="33.2" y1="21.2" x2="32.8" y2="48.8" gradientUnits="userSpaceOnUse"><stop stop-color="#290613" stop-opacity="0"></stop><stop offset="1" stop-color="#03153A" stop-opacity="0.79"></stop></linearGradient><linearGradient id="paint3_linear_1943_5392" x1="14.4894" y1="13.9276" x2="33.9294" y2="36.2026" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.24299" stop-color="#FFFAFA"></stop><stop offset="1" stop-color="#DEDDDD"></stop></linearGradient></defs></svg>
          <span className="ml-2 text-base md:text-xl font-light dark:text-success">Yolo Music</span></a>
            <div className="ser sm:dark:bg-input_bg flex items-center sm:border-[0.031rem] sm:dark:border-wynk-toast-background rounded-[2.5rem] max-w-[12.75rem] md:min-w-[17.75rem] lg:min-w-[18.75rem] sm:dark:shadow-[inset_0px_11px_34px_rgba(82,82,82,0.3)] sm:pl-7 sm:py-2 ml-4 border-black">
              <span className="dark:text-wynk-heading_light1 md:dark:text-wynk-search_white lg:mr-4 sm:mr-0">
                <span data-testid="searchIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.4434 16.4434L20.9997 20.9997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></span>
                  <input type="search" title="Search" placeholder="Search Songs" className="hidden sm:block placeholder-elipsis w-full h-full outline-none text-title bg-transparent text-sm sm:text-base dark:placeholder:text-wynk-gray1 ml-2 font-light" readonly="" value=""/>
                  </div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         <ul>
          {/* <Link className="nav-link" to="/">
            Artists
          </Link> */}
          <Link className="nav-link" to="/login">
            Login
          </Link>
            </ul>
        </div>
      </nav>
      
      <div className="Container">
        <div className="album d-flex flex-wrap justify-content-center">
          {playlist.length > 0 &&
            playlist.map((current) => (
              <Card style={{ width: "15rem", height: "20rem",margin:"10px" }}>
                <Link to={`/artistmore/${current._id}`}><Card.Img variant="top" src={current.image}/></Link>
                <Card.Title className="bg-dark text-white">{current.title}</Card.Title>
              </Card>
            ))}
          ;
        </div>
      </div>
    
    </div>
    
  )
}

export default Artist;