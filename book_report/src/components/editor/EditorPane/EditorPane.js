/**
 * 글을 작성하는 영역
-> 제목, 내용, 태그를 입력받음
 */

import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
//Code mirror 코드에디터 라이브러리 -> 코드에 색상을 입혀주는 역할 
import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown'; // 마크다운 문법 색상
// 마크다운 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// CodeMirror를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {
  // 에디터 ref
  editor= null
  //CodeMirror 인스턴스
  CodeMirror = null

  initializeEditor = () => {
    this.CodeMirror = CodeMirror(this.editor, {
      mode : 'markdown',
      theme : 'monokai',
      //왼쪽에 라인 넘버 띄우기
      lineNumbers : true,
      // 내용이 너무 길면 다음 줄에 작성
      lineWrapping : true
    });
  }
  //컴포넌트가 만들어지고 첫 렌더링을 다 마친후 실행되는 메소드 
  componentDidMount(){
    this.initializeEditor();
  }

  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }

  handleChangeMarkdown = (doc) => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor(); // 텍스트 cursor의 위치를 저장
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // markdown이 변경되면 에디터의 값도 변경
    // 이 과정에서 텍스트 커서의 위치가 초기화되기 때문에, 
    // 저장해둔 커서의 위치가 있으면 해당 위치로 설정
    if(prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if(!codeMirror) return; // 인스턴스가 아직 안 만들어진 경우
      codeMirror.setValue(this.props.markdown);
      if(!cursor) return; // 커서가 없는 경우
      codeMirror.setCursor(cursor);
    }
  }

  render() {
    const { handleChange } = this;
    const { tags, title } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input 
          className={cx('title')} 
          placeholder="제목을 입력하세요" 
          name="title"
          value={title}
          onChange={handleChange}
        />
        <div className={cx('code-editor')} ref={ref=>this.editor=ref}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input 
            name="tags"
            placeholder="태그를 입력하세요 (쉼표로 구분)"
            value={tags}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default EditorPane;