import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/joy/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';

const githubUrl: string = "https://github.com/CodeCaterpillar666/type-up";
const email: string = "mailto:typeup98101@gmail.com";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={githubUrl}>
        TYPE-UP
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <IconButton onClick={() => window.open(githubUrl)} variant="soft">
              <GitHubIcon />
          </IconButton>
          <IconButton onClick={() => window.open(email)} variant="soft">
              <EmailIcon />
          </IconButton>
        </Stack>
        <Copyright />
      </Container>
    </Box>
  );
}