import Container from '../../ui/Container/Container';

const Footer = () => {
  return (
    <footer style={{ padding: 40, background: '#111', color: '#fff' }}>
      <Container>
        © {new Date().getFullYear()} Электромонтаж
      </Container>
    </footer>
  );
};

export default Footer;
