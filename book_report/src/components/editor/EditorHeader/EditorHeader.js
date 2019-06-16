/**
 * Editor 에디터 위쪽에 위치하는 파란색 Header
 */
import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);
//Header 컴포넌트는 ongoback, onsubmit이라는 props를 전달받음.
const EditorHeader = ({onGoBack, onSubmit}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button onClick={onGoBack} theme="outline">뒤로가기</Button>
      </div>
      <div className={cx('submit')}>
        <Button onClick={onSubmit} theme="outline">작성하기</Button>
      </div>
    </div>
  );
};

export default EditorHeader;