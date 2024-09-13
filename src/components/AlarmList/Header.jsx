import React, { useState } from "react";
import * as S from "./style";
import Modal_fix from "./Modal_fix"; // Modal_fix 컴포넌트 임포트
import Modal_add from "./Modal_add"; // Modal_add 컴포넌트 임포트

const Header = () => {
  const [isModalOpenForEdit, setIsModalOpenForEdit] = useState(false); // 편집 모달 상태 관리
  const [isModalOpenForAdd, setIsModalOpenForAdd] = useState(false); // 추가 모달 상태 관리

  // 편집 모달 열기/닫기 핸들러
  const openEditModal = () => {
    setIsModalOpenForEdit(true);
  };

  const closeEditModal = () => {
    setIsModalOpenForEdit(false);
  };

  // 추가 모달 열기/닫기 핸들러
  const openAddModal = () => {
    setIsModalOpenForAdd(true);
  };

  const closeAddModal = () => {
    setIsModalOpenForAdd(false);
  };

  return (
    <>
      <S.Container>
        {/* '편집'을 클릭하면 편집 모달을 열도록 설정 */}
        <p onClick={openEditModal}>편집</p>
        <S.Image src="/src/assets/images/logo.png" alt="바보" id="icon" />
        {/* 'plus'를 클릭하면 추가 모달을 열도록 설정 */}
        <S.Image src="/src/assets/images/plus.png" alt="바보" id="plus" onClick={openAddModal} />
      </S.Container>

      {/* 편집 모달이 열렸을 때 Modal_fix 컴포넌트를 표시 */}
      {isModalOpenForEdit && <Modal_fix onClose={closeEditModal} />}

      {/* 추가 모달이 열렸을 때 Modal_add 컴포넌트를 표시 */}
      {isModalOpenForAdd && <Modal_add onClose={closeAddModal} />}
    </>
  );
};

export default Header;
    