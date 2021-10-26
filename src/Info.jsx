import React from 'react';
import useInputs from './useInputs';

const Info = () => {
  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');
  //   useEffect(() => {
  //     console.log('effect');
  //     return () => {
  //       console.log('cleanup');
  //     };
  //   }, []);

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickname = (e) => {
  //     setNickname(e.target.value);
  //   };
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>NAME : </b> {name}
      </div>
      <div>
        <b>NICKNAME : </b>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
