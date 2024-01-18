import {
  Html,
  Head,
  Text,
  Link,
  Container,
  Tailwind,
} from "@react-email/components";

export const EmailTemplate = () => {
  return (
    <Tailwind>
      <Html lang="en">
        <Head>
          <title>Welcome to Paired!</title>
        </Head>
        <Container className="w-full h-full flex-col text-2xl bg-slate-100">
          <h1 className="text-4xl font-bold text-blue-400">
            Welcome to Paired!
          </h1>
          <Text className="">
            Thank you for joining the waitlist for Paired, your go-to roommate
            and shared flats search service. We&apos;re excited to help you find
            compatible roommates and ideal living spaces.
          </Text>
          <Text>
            While you wait, feel free to explore more about Paired and get ready
            to create your profile, search for roommate and room ads, and
            connect with potential matches.
          </Text>
          <Text>Click the button below to explore Paired:</Text>
          <Link href={`${process.env.URL}#features`}>Discover Paired</Link>
          <Text>
            If you have any questions or need assistance, don&apos;t hesitate to
            reach out to our support team at support@paired-app.com.
          </Text>
          <Text>
            Best regards,
            <br /> The Paired Team
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};
