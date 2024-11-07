import Button from "./Button";

function CommentsForm() {
  return (
    <div>
      <form className="form">
        <div className="mainDiv">
          <label htmlFor="name">نام و نام خانوادگی : </label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div className="mainDiv">
          <label htmlFor="mail">ایمیل : </label>
          <input type="email" id="mail" name="user_email" />
        </div>
        <div className="mainDiv">
          <label htmlFor="msg">متن پیام : </label>
          <textarea id="msg" name="user_message"></textarea>
        </div>
        <Button buttonName="ثبت دیدگاه" className="text-white bg-main-color shadow-none mt-5" />
      </form>
    </div>
  );
}

export default CommentsForm;
