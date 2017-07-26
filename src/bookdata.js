const books =   [
                    {   
                        "id": 1,
                        "shelf" : "currentlyReading",
                        "title":"To Kill a Mockingbird",
                        "author": "Harper Lee",
                        "image": {width: 128, height: 193, backgroundImage: "url('http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api')" }
                    },
                     {   
                        "id": 2,
                        "shelf" : "currentlyReading",
                        "title":"Ender's Game",
                        "author": "Orson Scott Card",
                        "image": {width: 128, height: 188, backgroundImage: "url('http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api')"}
                    }, 
                    {   
                        "id": 3,
                        "shelf" : "wantToRead",
                        "title":"1776",
                        "author": "David McCullough",
                        "image": {width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'}
                    },
                     {   
                        "id": 4,
                        "shelf" : "wantToRead",
                        "title":"Harry Potter and the Sorcerer's Stone",
                        "author": "J.K. Rowling",
                        "image": { width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' }
                    },
                    {   
                        "id": 5,
                        "shelf" : "read",
                        "title":"The Hobbit",
                        "author": "J.R.R. Tolkien",
                        "image": { width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }
                    },
                     {   
                        "id": 6,
                        "shelf" : "read",
                        "title":"Oh, the Places You'll Go!",
                        "author": "Seuss",
                        "image": { width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }
                    },
                     {   
                        "id": 7,
                        "shelf" : "read",
                        "title":"The Adventures of Tom Sawyer",
                        "author": "Mark Twain",
                        "image": { width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }
                    }
            ]

export default books

/*
<div className="book-cover" style={{width : this.props.book.image.width, 
                                                        height : this.props.book.image.height, 
                                                        backgroundImage : this.props.book.image.backgroundImage}}>
                                                    </div>
sample from API
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
App.js (28,1)
   [
      0: {
         [functions]: ,
         __proto__: { },
         allowAnonLogging: true,
         authors: [
            0: "William E. Shotts, Jr.",
            length: 1
         ],
         averageRating: 4,
         canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ",
         categories: [
            0: "COMPUTERS",
            length: 1
         ],
         contentVersion: "1.2.2.0.preview.2",
         description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial "shell shock," you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's "Evolution of a SysAdmin"",
         id: "nggnmAEACAAJ",
         imageLinks: { },
         industryIdentifiers: [ ],
         infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
         language: "en",
         maturityRating: "NOT_MATURE",
         pageCount: 480,
         panelizationSummary: { },
         previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
         printType: "BOOK",
         publishedDate: "2012",
         publisher: "No Starch Press",
         ratingsCount: 2,
         readingModes: { },
         shelf: "currentlyReading",
         subtitle: "A Complete Introduction",
         title: "The Linux Command Line"
      },
      1: { },
      2: { },
      3: { },
      4: { },
      5: { },
      6: { },
      length: 7
   ]

*/