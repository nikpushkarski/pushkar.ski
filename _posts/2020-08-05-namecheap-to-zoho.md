---
layout: post
title:  "Switching from Namecheap to Zoho Mail"
categories: [ Tech, Experience ]
# tags: [tech tag]
image: assets/images/11.jpg
description: "Why and how I switched to another email hosting provider"
featured: true
hidden: false
comments: true
# rating: 4.5
---

# Switching from Namecheap to Zoho Mail

“New Problems Require New Solutions,” to paraphrase a popular meme. In June 2020, I bought a **.ski** domain and registered a personal email along with it. Whereas buying a domain wasn’t new to me, creating a personal email definitely **was**. The chief aspect of this activity was choosing an email hosting provider, so the choice fell on the cheapest one, Namecheap, for about $9 a year. At first, it seemed totally fine, but the devil was in the details.

## Why Switch?

I’ve been using Gmail for about… 10 years or so. I respect Gmail as a credible, stable email provider and like its web/mobile clients. That’s why I set up an email with Namecheap to forward all the incoming letters to my \*@gmail account. It did for some time until I realized that I wasn’t seeing 100% of incoming messages in my Gmail account. This forced me to log in to Namecheap’s web client (which is a far cry from Gmail’s client) and check the **Spam** folder. There they were, my missing emails! I would have been happy if Namecheap had been forwarding ALL incoming messages, including spam, but it’d been forwarding only “legitimate” emails to my Gmail, so I never had a chance to see some of the correspondence. What options did I still have?

* I might go to the **Spam** folder in Namecheap’s client and mark legitimate letters as “not spam.” Eh, actually, I couldn’t. Gmail has this functionality, Namecheap doesn’t.
* I could use Namecheap’s web/mobile clients to solve the issue. Eh, actually, I’d better not, as they’re quite slow and look/feel pathetic.
* Ok, I read some forums and found out that I can write a letter to the Namecheap support asking them to adjust the spam filter. Eh, actually, it’s not the UX experience that I am used to. With Gmail, I’m accustomed to having control over spam **from my end**, which means **seeing** it in the appropriate folder along with having options to mark/unmark letters as spam (or not). Even if the support adjusted their spam filters, there would be no guarantee that after a while I wouldn’t be bumping into the same problem yet again.

> To conclude, the **Spam** folder consumed too much legit content, and I had no control over it.
>
> e.g., the Spotify greeting/verification email redirected there. It’s a shame.


## Zoho or G Suite?

That was my choice. The first thought was to upgrade my good ol’ Gmail account to a paid one or to register a new, separate G Suite account and then merge it with the old Gmail account.

Pity, but it’s [not possible to upgrade](https://support.google.com/a/thread/3907063?hl=en) a regular Gmail account to a G Suite one.

Ok then. I’d looked at a bunch of “The Best 5/7/10 Email Hosting Providers” reviews, and Zoho was everywhere. In addition, its pricing is comparable to the cheap Namecheap (a little pun here, but it’s a fact anyway), so I decided to give it a try.


## Namecheap Backup

Even though I decided to leave this provider, I cannot deny the fact that they have comprehensive documentation. That said, I didn’t have any issues while backing up my emails. I just followed [this guide](https://www.namecheap.com/support/knowledgebase/article.aspx/9454/2226/how-to-back-up-and-restore-emails-in-private-email-webmail/) to save all the incoming messages as one file. Outbound messages weren’t stored on Namecheap’s side, as I’ve been using Gmail for sending emails; hence, there was no possibility to retrieve emails sent from Namecheap’s web client.
I’ve backed up the emails sent using Gmail by just forwarding them as an attachment. Not the most elegant solution but the fastest one, especially in my case of just 39 emails.

![forward_as](..\assets\images\forward_as.png)

## Zoho Setup 

At first, I stumbled upon a little bug on their side: during registration, I specified my contact email (a Gmail one) but bumped into an error: “The given email address already exists.” Well, that was a reminder that I already had an account there. I had totally forgotten about it. So I tried to restore my password using this Gmail address, but no luck — I didn’t receive an email for password reset. As a result, I couldn’t register, and I couldn’t restore access.

![zoho_error](..\assets\images\zoho_error.png)

A few hours later, a reset message arrived, but the link in there was already expired. I requested another and got it immediately this time, successfully changed the password, logged in to my Zoho account, and started to set up Zoho Mail.

I’ve got to mention that Zoho’s docs are great, too, and they provided me with an advanced UX in comparison with Namecheap: besides an onboarding email with all the steps required, they implemented a straightforward, step-by-step interface to ensure that a user wouldn’t skip any required actions. As a more-or-less advanced user (or rather, a knowing-exactly-what-he-wants user), I first specified TXT and MX records; i.e., I performed steps 1 and 3. I didn’t add users and/or organizations, though.

![zoho_onboarding](..\assets\images\zoho_onboarding.png)

All this time, I’d been on a free plan, which is important to emphasize: Zoho Mail is **fully** operational with no charges. They gave me access to a web client and mobile apps as well. However, my next step was a subscription to the Lite plan, which allowed me to enable IMAP access. I used this feature to gain access to my emails via Gmail on Android.

> Fun fact:
>
> When I started to write this article, I’d been using Gmail. Later, I stopped using it in favor of the Zoho web/mobile clients.

The last thing to do was upload my email backups. I already have a file with inbound messages, so I just uploaded it using the **Import/Export** functionality in the Zoho web client settings and set them to **Inbox**. Next, I opened the message with 39 .eml files, downloaded them as an archive, uploaded this archive, and added these emails to the **Sent** folder. Nice and easy.

![zoho_import](..\assets\images\zoho_import.png)

## Spotify: a Litmus Test

During my onboarding, I received a message from Spotify inviting me to create my first playlist. The fact is, this email came directly to my **Inbox**, not to the **Spam** folder; this can already be called a success! Anyway, I came up with an idea to recreate the original case mentioned at the beginning of this article, so I deleted my Spotify account in order to create a new one with the same email, but… doing this requires waiting for 14 days :) So I wasn’t able to do it immediately. During the closing process, Spotify sent me a bunch of emails, and all of them had arrived immediately to a web client. Into **Inbox**, of course.

![spotify](..\assets\images\spotify.png)


## To Be Continued

Zoho Mail seems to operate just fine, but bear in mind that Namecheap did too in the very beginning :) So only time will tell if it’s a worthy provider or not.

What I can say for sure is that:

* The Zoho web client IS INCOMPARABLE with Namecheap’s: it works super fast, it has an appealing UI/UX, and, in my humble opinion, beats Gmail’s web client in all respects.

* Also, I remember how recently I applied the wrong DNS settings that screwed up the sending/receiving processes; after I fixed the parameters, it took about 24 hours for Namecheap to get back to normal functioning. Setting up brand new TXT/MX records for Zoho Mail meant the same, so I expected more or less the same wait. Surprisingly, the new email provider started to work in full after about 5–6 hours from the initial setup, which is awesome.

---

Thanks for reading, stay safe, and keep cool!

 

 


