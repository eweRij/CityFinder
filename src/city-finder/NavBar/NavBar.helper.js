const handleNavBarButton = (setOpen, setModalData, data) => {
  setOpen(true);
  setModalData({ title: data.title, content: data.content });
};
export default handleNavBarButton;
