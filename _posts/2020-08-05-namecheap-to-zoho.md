---
layout: post
title:  "Switching from Namecheap to Zoho Mail"
categories: [ Tech, Experience ]
# tags: [tech tag]
image: assets/images/11.jpg
description: "Why and how I switched to another email hosting provider"
featured: false
hidden: true
comments: true
# rating: 4.5
---

# Switching from Namecheap to Zoho Mail

"New Problems Require New Solutions", I'd say paraphrasing a popular meme. I bought a **.ski** domain and registered a personal email with it in June, 2020. Whereas buying a domain wasn't new to me, creating a personal email definitely **was**. The main part of that activity was choosing an email hosting provider, so choice fell on the cheapest one, Namecheap, for about 9 USD a year. At first it seemed totally fine, but it appeared that the devil was in the details.

## Why switching?

I've been using Gmail for about... 10 years or so. I respect Gmail as a credible, stable email provider and like its web/mobile clients. That's why I set up an email with Namecheap to forward all the incoming letters to my \*@gmail account. It did for some time, until I realized that I see not a 100% of incoming letters in my Gmail account. This forced me to log in to Namecheap's web client (which is a far cry from Gmail's client) and check the **Spam** folder. Here they were, my missed letters! I would be happy if Namecheap had been forwarding ALL incoming letters including spam, but it'd been forwarding only "legitimate" letters to my Gmail, so I never had a chance to see some correspondence. What options did I have yet?

* I could go to the **Spam** folder in Namecheap's client and mark legitimate letters as "not spam". Eh, actually I couldn't. Gmail has this functionality, Namecheap doesn't.
* I could use Namecheap's web/mobile clients to solve the issue. Eh, actually I'd better not, as they're quite slow and look/feel pathetic.
* Ok, I read some forums and fount our that I can write a letter to the Namecheap support asking to adjust spam filter. Eh, actually it's not the UX experience that I am used to. With Gmail, I'm accustomed to having control over spam on **my side**, which means **seeing** it the appropriate folder along with having options to mark/unmark letters as (not) spam. Even if the support adjusted their spam filters, there were no guarantee that after some time I wouldn't bumped into the same problem.

> To conclude, the **Spam** folder consumes too much of credible content and I have no control over it.
>
> I.e., the Spotify greeting/verification email was placed there. It's a shame.

## Zoho or G Suite?

That was my matter of choice. The first thought was to upgrade my good old gmail account to a paid one. Or, to register a new, separate G Suite account and then merge it with the old Gmail account.

Pity, but it's [not possible to upgrade](https://support.google.com/a/thread/3907063?hl=en) a regular Gmail account to a G Suite one.  

Ok then. I'd looked a bunch of "The best 5/7/10 email hosting providers" reviews and Zoho was everywhere. In addition, its pricing is comparable with a cheap Namecheap (a little pun here, but it's a fact anyway), so I decided to give it a try.

## Namecheap Backup

Even though I decided to leave this provider, I cannot deny a fact that they have a comprehensive documentation. That said, I didn't have any issues while backing up my emails, I just followed [this guide](https://www.namecheap.com/support/knowledgebase/article.aspx/9454/2226/how-to-back-up-and-restore-emails-in-private-email-webmail/) to save all the incoming messages as one file. Outbound messages weren't stored on Namecheap's side as I've been using Gmail for sending letters, hence, there was no possibility to retrieve sent letters from Namecheap's web client. 

I've backed up the sent letters using Gmail by just forwarding them as attachment. Not the most elegant solution, but the fastest one, especially in my case of just 39 letters. 

![forward_as](..\assets\images\forward_as.jpg)

## Zoho Setup 

At first, I stumbled upon a little bug on their side: during registration, I specified my contact email (a Gmail one), but  into an error, "The given email address already exist". Well, that was a reminder that I already has an account there, I totally forgot about it. So I tried to restore my password using this Gmail address, but no luck — I didn't receive a letter for password reset. As a result, I couldn't register, couldn't restore access.

![zoho_error](..\assets\images\zoho_error.jpg)

Few hours later a reset letter arrived, but the link in there was already expired. I request another letter and got it immediately this time, successfully changes the password, logged in to my Zoho account, and started to set up Zoho mail.

Have to mention that Zoho's docs are great too, but they provided me with an advanced UX in comparison with Namecheap: besides an onboarding email with all the steps required, they implemented an straightforward, step-by-step interface to ensure that a user wouldn't skip any required actions. As a more or less advanced user (or, better say, knowing-exactly-what-he-wants user) I first specified TXT and MX records, i.e., I performed steps 1 and 3. I didn't add user and/or organizations, though.

All this time I'd been on a free plan, which is important to emphasize: it appeared that Zoho mail is **fully** operational without any charges. They gave me access to a web client and mobile apps as well. However, my next step was subscription for the Lite plan which allowed me to enable IMAP access. I used this feature to gain access to my letters via Gmail on Android.

The last thing to do was upload my email backups. I already have a file with inbound messages, so I just uploaded it using the **Import/Export** functionality in the Zoho web client settings and place them to **Inbox**. Next, I opened the letter with 39 .eml files, download them as an archive, upload this archive and place these letters to the **Sent** folder. Nice and easy.

![zoho_import](..\assets\images\zoho_import.jpg)

## Spotify: a Litmus Test

During my onboarding, I received a letter from Spotify welcoming me to create my first playlist. The fact is, this letter came directly to my **Inbox**, not to the **Spam** folder; that already can be called a success! Anyway, I came with an idea to recreate the original case mentioned in the beginning of this article, so I deleted my Spotify account in order to create a new one with the same email, but... Such a case requires to wait 14 days :) So I wasn't able to do that immediately. Anyway, during the closing procedure Spotify sent me a bunch of emails and all of them had been arriving immediately to a web client. Into **Inbox**, of course.

![spotify](..\assets\images\spotify.jpg)



## To Be Continued

Zoho Mail seems to operate just fine, but I bear in mind that Namecheap did the same at the very beginning :) So, only time will tell if it's a worthy provider or not.

What I can say for sure is that:

* Zoho web client IS NOT comparable with Namecheap's one: it works super fast, it has an appealing UI/UX and, in my humble opinion, can beat a Gmail web client by all measures. 
* Also, I remember how recently I applied wrong DNS settings that broke sending/receiving processes; after I fixed the parameters, it took about a 24 hours for Namecheap to get back to normal functioning. Setting up a brand new TXT/MX records for Zoho Mail meant the same, so I expected more or less same time. Suprisingly, the new email provider started on its full in about 5-6 hours after initial setup, which is awesome.

---

Thanks for reading, stay safe and keep cool!

 

 


