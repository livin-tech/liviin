import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { ScreenLayout } from '../../layouts';

export const Terms = ({ navigation }) => {
  return (
    <ScreenLayout headerTitle="Terms & Conditions">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <Card.Content>
            <Paragraph style={styles.paragraph}>
              Welcome to [Your App/Website Name] (“Company”, “we”, “our”, “us”)!
              These Terms and Conditions (“Terms”, “Terms and Conditions”)
              govern your use of our website located at [website URL] (together
              or individually “Service”) operated by [Your Company Name].
            </Paragraph>
            <Divider style={styles.divider} />
            <Title style={styles.subtitle}>1. Introduction</Title>
            <Paragraph style={styles.paragraph}>
              Welcome to [Your App/Website Name] (“Company”, “we”, “our”, “us”)!
              These Terms and Conditions (“Terms”, “Terms and Conditions”)
              govern your use of our website located at [website URL] (together
              or individually “Service”) operated by [Your Company Name].
            </Paragraph>
            <Divider style={styles.divider} />
            <Title style={styles.subtitle}>2. Communications</Title>
            <Paragraph style={styles.paragraph}>
              By using our Service, you agree to subscribe to newsletters,
              marketing or promotional materials, and other information we may
              send. However, you may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by
              emailing at [your email address].
            </Paragraph>
            <Divider style={styles.divider} />
            <Title style={styles.subtitle}>3. Purchases</Title>
            <Paragraph style={styles.paragraph}>
              If you wish to purchase any product or service made available
              through the Service (“Purchase”), you may be asked to supply
              certain information relevant to your Purchase, including but not
              limited to, your credit card number, the expiration date of your
              credit card.
            </Paragraph>
            <Divider style={styles.divider} />
            <Title style={styles.subtitle}>4. Content</Title>
            <Paragraph style={styles.paragraph}>
              Our Service allows you to post, link, store, share, and otherwise
              make available certain information, text, graphics, videos, or
              other material (“Content”). You are responsible for the Content
              that you post on or through the Service, including its legality,
              reliability, and appropriateness.
            </Paragraph>
            <Divider style={styles.divider} />
            <Title style={styles.subtitle}>5. Changes to These Terms</Title>
            <Paragraph style={styles.paragraph}>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  divider: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 10,
  },
});
