import React, { useState } from 'react';
import './Signup.css';

function SingupPage() {
    // 비밀번호와 비밀번호 확인을 위한 상태 정의
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // 비밀번호 일치 여부를 나타내는 상태 정의
    const [passwordError, setPasswordError] = useState('');
    // 전화번호 확인을 위한 상태 정의
    const [tel, setTel] =useState('');
    // 전화번호 형식 여부 나타내는 상태 정의
    const [telError, setTelError] = useState('');
    // 아이디와 아이디 사용 가능 상태를 위한 상태 정의
    const [id,setId] = useState('');
    const [availableId, setAvailableId] = useState('');
    // 아이디 중복 여부 상태 정의
    const [idError, setIdError] = useState('');
    

    // //아이디 중복 체크를 어디로?
    // // 아이디를 적었을때 함수
    // const handleIdChange = async (e) => {
    //     // 입력되는 아이디를 새로운 아이디로
    //     const newId = e.target.value;
    //     setId(newId);

    //     // ID 중복 체크를 위해 서버에 요청 보냄
    //     try {
    //         const response = await fetch(`https://localhost:8080/check-mb_id?mb_id=${newId}`);
    //         const data = await response.json();
    //         setAvailableId(data.available);
    //     } catch (error) {
    //         console.error('이미 같은 아이디가 존재합니다.', error);
    //     }
    // };


    // 전화번호 유효성 검사 함수
    const valid_ph = (tel) => {
        // 전화번호 형식을 검증하는 정규식
        // 010으로 시작, 나머지 8자리 [0~9] 범위에서 입력
        const phoneRegex = /^010[0-9]{8}$/;
        return phoneRegex.test(tel);
    };


    // Submit 누를시 호출되는 함수
    const handleSubmit = (e) => {
        // 비밀번호와 비밀번호 확인이 일치하지 않으면 에러 메시지 출력
        if (password !== confirmPassword) {
            // post 하는 것을 막음
            e.preventDefault();
            setPasswordError('비밀번호가 일치하지 않습니다.');
        } 
        else {
            setPasswordError('');
        }

        if (!valid_ph(tel)){
            e.preventDefault();
            setTelError('올바른 형식이 아닙니다. 다시 확인해주세요.');
        }
        else {
            setTelError('');
        }
        // if (!availableId) {
        //     e.preventDefault();
        //     setIdError('이미 사용 중인 ID입니다.');
        // }
        // else{
        //     setIdError('');
        // }
    };

    return (
        <div className="signup-container">
            <header className="signup-header">
                <h1>Soon Market</h1>
            </header>
            <body>
                <div className="form-elements">
                    <form method="post" id="form-elements" onSubmit={handleSubmit}>
                        {/* 아이디 */}
                        <div className='form-element'>
                            <input 
                                type="text" 
                                id="mb_id" 
                                placeholder="ID" 
                                maxLength="255" 
                                className="form-control"
                                // 아이디 입력 시 호출되는 함수
                                //onChange={handleIdChange}
                            />
                        </div>
                        {/* 아이디 중복시 에러 메시지 */}
                        {/* {idError && <div style={{ color: 'red' }}>{idError}</div>} */}
                        {/* 비밀번호 */}
                        <div className='form-element'>
                            <input 
                                type='password' 
                                id='mb_passwd' 
                                placeholder='PASSWORD' 
                                maxLength="255" 
                                className="form-control" 
                                // 비밀번호 입력 시 호출되는 함수
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* 비밀번호 체크 */}
                        <div className='form-element'>
                            <input 
                                type='password' 
                                id='mb_passwd_ck' 
                                placeholder='PASSWORD CHECK' 
                                maxLength="255" 
                                className="form-control" 
                                // 비밀번호 확인 입력 시 호출되는 함수
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {/* 비밀번호 일치 여부에 따른 에러 메시지 */}
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                        {/* 이메일 */}
                        <div className='form-element'>
                            <input 
                                type='text' 
                                id='mb_email' 
                                placeholder='E-mail' 
                                maxLength="255" 
                                className="form-control"
                            />
                        </div>
                        {/* 닉네임 */}
                        <div className='form-element'>
                            <input 
                                type='text' 
                                id='mb_name' 
                                placeholder='Name' 
                                maxLength="255" 
                                className="form-control"
                            />
                        </div>
                        {/* 전화번호 */}
                        <div className='form-element'>
                            <input 
                                type='text' 
                                id='mb_tel' 
                                placeholder='Phone Number'  
                                className="form-control"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                            />
                        </div>
                        {/* 전화번호 형식이 아니면 에러 메시지 */}
                        {telError && <div style={{ color: 'red' }}>{telError}</div>}
                        {/* 주소 */}
                        <div className='form-element'>
                            <input 
                                type='text' 
                                id='mb_addr' 
                                maxLength="255"
                                placeholder='Address' 
                                className="form-control"
                            />
                        </div>
                        {/* 회원가입 버튼 */}
                        <div className='form-element'>
                            <input 
                                type='submit' 
                                value="Sing Up" 
                                className="bt-form-control"
                            />
                        </div>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default SingupPage;
