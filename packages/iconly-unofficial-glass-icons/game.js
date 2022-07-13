const data = {
	"body": "<g fill=\"none\"><g filter=\"url(#a)\"><path fill=\"url(#b)\" d=\"M63.5643 16.9918C59.6546 16.9518 55.7856 16.8719 51.9166 16.8719V16.1122C51.8759 10.1151 46.8665 5.1975 40.7169 5.15751H36.685C35.4632 5.15751 34.445 4.19798 34.445 2.99856C34.445 1.35934 33.1011 0 31.3906 0C29.7208 0 28.3361 1.35934 28.3361 2.99856C28.3361 7.4764 32.0829 11.1546 36.685 11.1546H40.7169C43.4863 11.1546 45.8077 13.3935 45.8077 16.1522V16.8319C40.2689 16.8319 34.8116 16.9119 29.4764 16.9918C15.3037 16.9918 5 27.067 5 40.9802V58.8516C5 72.7649 15.3037 82.8401 29.4357 82.8401C35.0967 82.96 40.8391 83 46.5407 83C52.2424 83 57.9033 82.96 63.5643 82.8401C77.6963 82.8401 88 72.7649 88 58.8516V40.9802C88 27.067 77.6963 16.9918 63.5643 16.9918\"/></g><g filter=\"url(#c)\" opacity=\"0.5\"><path fill=\"#E31352\" d=\"M59.5275 29.7949H32.9021C23.1995 29.7949 17.7021 33.8456 17.7021 40.9949V60.5949C17.7021 67.7443 23.1995 71.7949 32.9021 71.7949H59.5275C69.2301 71.7949 74.7021 67.7443 74.7021 60.5949V40.9949C74.7021 33.8456 69.2301 29.7949 59.5275 29.7949Z\"/></g><g filter=\"url(#d)\"><mask id=\"f\" width=\"84\" height=\"68\" x=\"20\" y=\"33\" fill=\"black\" maskUnits=\"userSpaceOnUse\"><rect width=\"84\" height=\"68\" x=\"20\" y=\"33\" fill=\"white\"/><path fill-rule=\"evenodd\" d=\"M74.753 34.1088C76.0396 34.1264 77.3293 34.1441 78.6235 34.1574C92.5285 34.1574 102.667 44.0706 102.667 57.7602V75.3443C102.667 89.034 92.5285 98.9472 78.6235 98.9472C73.0535 99.0652 67.4835 99.1045 61.8734 99.1045C56.2633 99.1045 50.6132 99.0652 45.0432 98.9472C31.1382 98.9472 21 89.034 21 75.3443V57.7602C21 44.0706 31.1382 34.1574 45.0833 34.1574C50.3327 34.0787 55.7023 34 61.1521 34C63.1557 34 65.1593 34 67.1629 34.0393C69.689 34.0393 72.2152 34.074 74.753 34.1088ZM57.1454 69.4842H52.9378V73.654C52.9378 75.2669 51.5754 76.6044 49.9324 76.6044C48.2494 76.6044 46.927 75.2669 46.927 73.654V69.4842H42.6794C41.0364 69.4842 39.674 68.1861 39.674 66.5339C39.674 64.921 41.0364 63.5835 42.6794 63.5835H46.927V59.453C46.927 57.8401 48.2494 56.5026 49.9324 56.5026C51.5754 56.5026 52.9378 57.8401 52.9378 59.453V63.5835H57.1454C58.7883 63.5835 60.1508 64.921 60.1508 66.5339C60.1508 68.1861 58.7883 69.4842 57.1454 69.4842ZM74.1766 62.8376H74.5773C76.2203 62.8376 77.5827 61.5395 77.5827 59.8873C77.5827 58.2744 76.2203 56.9369 74.5773 56.9369H74.1766C72.4936 56.9369 71.1712 58.2744 71.1712 59.8873C71.1712 61.5395 72.4936 62.8376 74.1766 62.8376ZM81.0282 76.3689H81.4289C83.0719 76.3689 84.4343 75.0707 84.4343 73.4185C84.4343 71.8057 83.0719 70.4682 81.4289 70.4682H81.0282C79.3452 70.4682 78.0228 71.8057 78.0228 73.4185C78.0228 75.0707 79.3452 76.3689 81.0282 76.3689Z\" clip-rule=\"evenodd\"/></mask><path fill=\"#FF749F\" fill-opacity=\"0.35\" fill-rule=\"evenodd\" d=\"M74.753 34.1088C76.0396 34.1264 77.3293 34.1441 78.6235 34.1574C92.5285 34.1574 102.667 44.0706 102.667 57.7602V75.3443C102.667 89.034 92.5285 98.9472 78.6235 98.9472C73.0535 99.0652 67.4835 99.1045 61.8734 99.1045C56.2633 99.1045 50.6132 99.0652 45.0432 98.9472C31.1382 98.9472 21 89.034 21 75.3443V57.7602C21 44.0706 31.1382 34.1574 45.0833 34.1574C50.3327 34.0787 55.7023 34 61.1521 34C63.1557 34 65.1593 34 67.1629 34.0393C69.689 34.0393 72.2152 34.074 74.753 34.1088ZM57.1454 69.4842H52.9378V73.654C52.9378 75.2669 51.5754 76.6044 49.9324 76.6044C48.2494 76.6044 46.927 75.2669 46.927 73.654V69.4842H42.6794C41.0364 69.4842 39.674 68.1861 39.674 66.5339C39.674 64.921 41.0364 63.5835 42.6794 63.5835H46.927V59.453C46.927 57.8401 48.2494 56.5026 49.9324 56.5026C51.5754 56.5026 52.9378 57.8401 52.9378 59.453V63.5835H57.1454C58.7883 63.5835 60.1508 64.921 60.1508 66.5339C60.1508 68.1861 58.7883 69.4842 57.1454 69.4842ZM74.1766 62.8376H74.5773C76.2203 62.8376 77.5827 61.5395 77.5827 59.8873C77.5827 58.2744 76.2203 56.9369 74.5773 56.9369H74.1766C72.4936 56.9369 71.1712 58.2744 71.1712 59.8873C71.1712 61.5395 72.4936 62.8376 74.1766 62.8376ZM81.0282 76.3689H81.4289C83.0719 76.3689 84.4343 75.0707 84.4343 73.4185C84.4343 71.8057 83.0719 70.4682 81.4289 70.4682H81.0282C79.3452 70.4682 78.0228 71.8057 78.0228 73.4185C78.0228 75.0707 79.3452 76.3689 81.0282 76.3689Z\" clip-rule=\"evenodd\"/><path fill=\"url(#e)\" d=\"M78.6235 34.1574L78.6133 35.1574H78.6235V34.1574ZM74.753 34.1088L74.7667 33.1089L74.753 34.1088ZM78.6235 98.9472V97.9472C78.6164 97.9472 78.6094 97.9473 78.6023 97.9474L78.6235 98.9472ZM45.0432 98.9472L45.0644 97.9474C45.0573 97.9473 45.0502 97.9472 45.0432 97.9472V98.9472ZM45.0833 34.1574V35.1574C45.0882 35.1574 45.0932 35.1573 45.0982 35.1572L45.0833 34.1574ZM67.1629 34.0393L67.1433 35.0391C67.1498 35.0393 67.1564 35.0393 67.1629 35.0393V34.0393ZM52.9378 69.4842V68.4842C52.3855 68.4842 51.9378 68.9319 51.9378 69.4842H52.9378ZM46.927 69.4842H47.927C47.927 68.9319 47.4793 68.4842 46.927 68.4842V69.4842ZM46.927 63.5835V64.5835C47.4793 64.5835 47.927 64.1358 47.927 63.5835H46.927ZM52.9378 63.5835H51.9378C51.9378 64.1358 52.3855 64.5835 52.9378 64.5835V63.5835ZM78.6337 33.1574C77.3416 33.1442 76.0536 33.1265 74.7667 33.1089L74.7393 35.1087C76.0257 35.1263 77.317 35.144 78.6133 35.1573L78.6337 33.1574ZM103.667 57.7602C103.667 43.4998 93.0621 33.1574 78.6235 33.1574V35.1574C91.9948 35.1574 101.667 44.6413 101.667 57.7602H103.667ZM103.667 75.3443V57.7602H101.667V75.3443H103.667ZM78.6235 99.9472C93.0621 99.9472 103.667 89.6047 103.667 75.3443H101.667C101.667 88.4633 91.9948 97.9472 78.6235 97.9472V99.9472ZM61.8734 100.105C67.488 100.105 73.0654 100.065 78.6447 99.947L78.6023 97.9474C73.0415 98.0652 67.479 98.1045 61.8734 98.1045V100.105ZM45.022 99.947C50.6013 100.065 56.2589 100.105 61.8734 100.105V98.1045C56.2677 98.1045 50.6251 98.0652 45.0644 97.9474L45.022 99.947ZM20 75.3443C20 89.6047 30.6045 99.9472 45.0432 99.9472V97.9472C31.6719 97.9472 22 88.4633 22 75.3443H20ZM20 57.7602V75.3443H22V57.7602H20ZM45.0833 33.1574C30.6057 33.1574 20 43.4987 20 57.7602H22C22 44.6424 31.6708 35.1574 45.0833 35.1574V33.1574ZM61.1521 33C55.6937 33 50.3169 33.0788 45.0683 33.1575L45.0982 35.1572C50.3485 35.0786 55.7109 35 61.1521 35V33ZM67.1825 33.0395C65.1675 33 63.1541 33 61.1521 33V35C63.1573 35 65.1511 35 67.1433 35.0391L67.1825 33.0395ZM74.7667 33.1089C72.23 33.0741 69.697 33.0393 67.1629 33.0393V35.0393C69.681 35.0393 72.2003 35.0739 74.7393 35.1087L74.7667 33.1089ZM52.9378 70.4842H57.1454V68.4842H52.9378V70.4842ZM53.9378 73.654V69.4842H51.9378V73.654H53.9378ZM49.9324 77.6044C52.1101 77.6044 53.9378 75.8365 53.9378 73.654H51.9378C51.9378 74.6973 51.0406 75.6044 49.9324 75.6044V77.6044ZM45.927 73.654C45.927 75.8279 47.7059 77.6044 49.9324 77.6044V75.6044C48.7929 75.6044 47.927 74.7059 47.927 73.654H45.927ZM45.927 69.4842V73.654H47.927V69.4842H45.927ZM42.6794 70.4842H46.927V68.4842H42.6794V70.4842ZM38.674 66.5339C38.674 68.7643 40.5105 70.4842 42.6794 70.4842V68.4842C41.5624 68.4842 40.674 67.6078 40.674 66.5339H38.674ZM42.6794 62.5835C40.5017 62.5835 38.674 64.3514 38.674 66.5339H40.674C40.674 65.4906 41.5712 64.5835 42.6794 64.5835V62.5835ZM46.927 62.5835H42.6794V64.5835H46.927V62.5835ZM45.927 59.453V63.5835H47.927V59.453H45.927ZM49.9324 55.5026C47.7059 55.5026 45.927 57.2791 45.927 59.453H47.927C47.927 58.4011 48.7929 57.5026 49.9324 57.5026V55.5026ZM53.9378 59.453C53.9378 57.2705 52.1101 55.5026 49.9324 55.5026V57.5026C51.0406 57.5026 51.9378 58.4098 51.9378 59.453H53.9378ZM53.9378 63.5835V59.453H51.9378V63.5835H53.9378ZM57.1454 62.5835H52.9378V64.5835H57.1454V62.5835ZM61.1508 66.5339C61.1508 64.3514 59.3231 62.5835 57.1454 62.5835V64.5835C58.2535 64.5835 59.1508 65.4906 59.1508 66.5339H61.1508ZM57.1454 70.4842C59.3143 70.4842 61.1508 68.7643 61.1508 66.5339H59.1508C59.1508 67.6078 58.2623 68.4842 57.1454 68.4842V70.4842ZM74.5773 61.8376H74.1766V63.8376H74.5773V61.8376ZM76.5827 59.8873C76.5827 60.9613 75.6943 61.8376 74.5773 61.8376V63.8376C76.7463 63.8376 78.5827 62.1177 78.5827 59.8873H76.5827ZM74.5773 57.9369C75.6855 57.9369 76.5827 58.844 76.5827 59.8873H78.5827C78.5827 57.7048 76.7551 55.9369 74.5773 55.9369V57.9369ZM74.1766 57.9369H74.5773V55.9369H74.1766V57.9369ZM72.1712 59.8873C72.1712 58.8354 73.0371 57.9369 74.1766 57.9369V55.9369C71.9501 55.9369 70.1712 57.7134 70.1712 59.8873H72.1712ZM74.1766 61.8376C73.0284 61.8376 72.1712 60.9698 72.1712 59.8873H70.1712C70.1712 62.1091 71.9588 63.8376 74.1766 63.8376V61.8376ZM81.4289 75.3689H81.0282V77.3689H81.4289V75.3689ZM83.4343 73.4185C83.4343 74.4925 82.5459 75.3689 81.4289 75.3689V77.3689C83.5979 77.3689 85.4343 75.6489 85.4343 73.4185H83.4343ZM81.4289 71.4682C82.5371 71.4682 83.4343 72.3753 83.4343 73.4185H85.4343C85.4343 71.236 83.6066 69.4682 81.4289 69.4682V71.4682ZM81.0282 71.4682H81.4289V69.4682H81.0282V71.4682ZM79.0228 73.4185C79.0228 72.3667 79.8887 71.4682 81.0282 71.4682V69.4682C78.8016 69.4682 77.0228 71.2446 77.0228 73.4185H79.0228ZM81.0282 75.3689C79.8799 75.3689 79.0228 74.5011 79.0228 73.4185H77.0228C77.0228 75.6403 78.8104 77.3689 81.0282 77.3689V75.3689Z\" mask=\"url(#f)\"/></g><g filter=\"url(#g)\"><mask id=\"j\" fill=\"white\"><path fill-rule=\"evenodd\" d=\"M74.1589 62.8584H74.5596C76.2025 62.8584 77.565 61.5603 77.565 59.9081C77.565 58.2952 76.2025 56.9577 74.5596 56.9577H74.1589C72.4758 56.9577 71.1535 58.2952 71.1535 59.9081C71.1535 61.5603 72.4758 62.8584 74.1589 62.8584ZM81.0114 76.3916H81.4121C83.0551 76.3916 84.4175 75.0935 84.4175 73.4413C84.4175 71.8284 83.0551 70.4909 81.4121 70.4909H81.0114C79.3284 70.4909 78.006 71.8284 78.006 73.4413C78.006 75.0935 79.3284 76.3916 81.0114 76.3916Z\" clip-rule=\"evenodd\"/></mask><path fill=\"url(#h)\" fill-rule=\"evenodd\" d=\"M74.1589 62.8584H74.5596C76.2025 62.8584 77.565 61.5603 77.565 59.9081C77.565 58.2952 76.2025 56.9577 74.5596 56.9577H74.1589C72.4758 56.9577 71.1535 58.2952 71.1535 59.9081C71.1535 61.5603 72.4758 62.8584 74.1589 62.8584ZM81.0114 76.3916H81.4121C83.0551 76.3916 84.4175 75.0935 84.4175 73.4413C84.4175 71.8284 83.0551 70.4909 81.4121 70.4909H81.0114C79.3284 70.4909 78.006 71.8284 78.006 73.4413C78.006 75.0935 79.3284 76.3916 81.0114 76.3916Z\" clip-rule=\"evenodd\"/><path fill=\"url(#i)\" d=\"M74.5596 62.4584H74.1589V63.2584H74.5596V62.4584ZM77.165 59.9081C77.165 61.329 75.9921 62.4584 74.5596 62.4584V63.2584C76.4129 63.2584 77.965 61.7915 77.965 59.9081H77.165ZM74.5596 57.3577C75.9886 57.3577 77.165 58.523 77.165 59.9081H77.965C77.965 58.0673 76.4165 56.5577 74.5596 56.5577V57.3577ZM74.1589 57.3577H74.5596V56.5577H74.1589V57.3577ZM71.5535 59.9081C71.5535 58.5196 72.6933 57.3577 74.1589 57.3577V56.5577C72.2584 56.5577 70.7535 58.0708 70.7535 59.9081H71.5535ZM74.1589 62.4584C72.6898 62.4584 71.5535 61.3324 71.5535 59.9081H70.7535C70.7535 61.7881 72.2619 63.2584 74.1589 63.2584V62.4584ZM81.4121 75.9916H81.0114V76.7916H81.4121V75.9916ZM84.0175 73.4413C84.0175 74.8622 82.8447 75.9916 81.4121 75.9916V76.7916C83.2655 76.7916 84.8175 75.3247 84.8175 73.4413H84.0175ZM81.4121 70.8909C82.8412 70.8909 84.0175 72.0563 84.0175 73.4413H84.8175C84.8175 71.6005 83.269 70.0909 81.4121 70.0909V70.8909ZM81.0114 70.8909H81.4121V70.0909H81.0114V70.8909ZM78.406 73.4413C78.406 72.0528 79.5458 70.8909 81.0114 70.8909V70.0909C79.111 70.0909 77.606 71.604 77.606 73.4413H78.406ZM81.0114 75.9916C79.5423 75.9916 78.406 74.8656 78.406 73.4413H77.606C77.606 75.3213 79.1145 76.7916 81.0114 76.7916V75.9916Z\" mask=\"url(#j)\"/></g><g filter=\"url(#k)\"><mask id=\"n\" fill=\"white\"><path d=\"M57.1288 69.5057H52.9212V73.6755C52.9212 75.2884 51.5588 76.6259 49.9158 76.6259C48.2328 76.6259 46.9104 75.2884 46.9104 73.6755V69.5057H42.6628C41.0198 69.5057 39.6574 68.2075 39.6574 66.5553C39.6574 64.9425 41.0198 63.605 42.6628 63.605H46.9104V59.4745C46.9104 57.8616 48.2328 56.5241 49.9158 56.5241C51.5588 56.5241 52.9212 57.8616 52.9212 59.4745V63.605H57.1288C58.7717 63.605 60.1342 64.9425 60.1342 66.5553C60.1342 68.2075 58.7717 69.5057 57.1288 69.5057\"/></mask><path fill=\"url(#l)\" d=\"M57.1288 69.5057H52.9212V73.6755C52.9212 75.2884 51.5588 76.6259 49.9158 76.6259C48.2328 76.6259 46.9104 75.2884 46.9104 73.6755V69.5057H42.6628C41.0198 69.5057 39.6574 68.2075 39.6574 66.5553C39.6574 64.9425 41.0198 63.605 42.6628 63.605H46.9104V59.4745C46.9104 57.8616 48.2328 56.5241 49.9158 56.5241C51.5588 56.5241 52.9212 57.8616 52.9212 59.4745V63.605H57.1288C58.7717 63.605 60.1342 64.9425 60.1342 66.5553C60.1342 68.2075 58.7717 69.5057 57.1288 69.5057\"/><path fill=\"url(#m)\" d=\"M52.9212 69.5057V69.1057H52.5212V69.5057H52.9212ZM46.9104 69.5057H47.3104V69.1057H46.9104V69.5057ZM46.9104 63.605V64.005H47.3104V63.605H46.9104ZM52.9212 63.605H52.5212V64.005H52.9212V63.605ZM57.1288 69.1057H52.9212V69.9057H57.1288V69.1057ZM52.5212 69.5057V73.6755H53.3212V69.5057H52.5212ZM52.5212 73.6755C52.5212 75.0605 51.3448 76.2259 49.9158 76.2259V77.0259C51.7727 77.0259 53.3212 75.5162 53.3212 73.6755H52.5212ZM49.9158 76.2259C48.4502 76.2259 47.3104 75.064 47.3104 73.6755H46.5104C46.5104 75.5128 48.0154 77.0259 49.9158 77.0259V76.2259ZM47.3104 73.6755V69.5057H46.5104V73.6755H47.3104ZM46.9104 69.1057H42.6628V69.9057H46.9104V69.1057ZM42.6628 69.1057C41.2302 69.1057 40.0574 67.9762 40.0574 66.5553H39.2574C39.2574 68.4388 40.8094 69.9057 42.6628 69.9057V69.1057ZM40.0574 66.5553C40.0574 65.1703 41.2337 64.005 42.6628 64.005V63.205C40.8059 63.205 39.2574 64.7146 39.2574 66.5553H40.0574ZM42.6628 64.005H46.9104V63.205H42.6628V64.005ZM47.3104 63.605V59.4745H46.5104V63.605H47.3104ZM47.3104 59.4745C47.3104 58.086 48.4502 56.9241 49.9158 56.9241V56.1241C48.0154 56.1241 46.5104 57.6372 46.5104 59.4745H47.3104ZM49.9158 56.9241C51.3448 56.9241 52.5212 58.0895 52.5212 59.4745H53.3212C53.3212 57.6338 51.7727 56.1241 49.9158 56.1241V56.9241ZM52.5212 59.4745V63.605H53.3212V59.4745H52.5212ZM52.9212 64.005H57.1288V63.205H52.9212V64.005ZM57.1288 64.005C58.5578 64.005 59.7342 65.1703 59.7342 66.5553H60.5342C60.5342 64.7146 58.9856 63.205 57.1288 63.205V64.005ZM59.7342 66.5553C59.7342 67.9762 58.5613 69.1057 57.1288 69.1057V69.9057C58.9821 69.9057 60.5342 68.4388 60.5342 66.5553H59.7342Z\" mask=\"url(#n)\"/></g><defs><filter id=\"a\" width=\"109\" height=\"109\" x=\"-8\" y=\"-13\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur in=\"BackgroundImage\" stdDeviation=\"6.5\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur_1_218\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur_1_218\" result=\"shape\"/></filter><filter id=\"c\" width=\"91\" height=\"76\" x=\"0.702148\" y=\"12.7949\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur result=\"effect1_foregroundBlur_1_218\" stdDeviation=\"8.5\"/></filter><filter id=\"d\" width=\"131.667\" height=\"115.105\" x=\"-4\" y=\"9\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur in=\"BackgroundImage\" stdDeviation=\"12\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur_1_218\"/><feBlend in=\"SourceGraphic\" in2=\"effect1_backgroundBlur_1_218\" result=\"shape\"/></filter><filter id=\"g\" width=\"43.264\" height=\"49.4339\" x=\"56.1535\" y=\"41.9577\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur in=\"BackgroundImage\" stdDeviation=\"7.5\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur_1_218\"/><feColorMatrix in=\"SourceAlpha\" result=\"hardAlpha\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/><feOffset dx=\"5\" dy=\"5\"/><feGaussianBlur stdDeviation=\"5\"/><feColorMatrix values=\"0 0 0 0 1 0 0 0 0 0.321569 0 0 0 0 0.54902 0 0 0 0.5 0\"/><feBlend in2=\"effect1_backgroundBlur_1_218\" result=\"effect2_dropShadow_1_218\"/><feBlend in=\"SourceGraphic\" in2=\"effect2_dropShadow_1_218\" result=\"shape\"/></filter><filter id=\"k\" width=\"50.4768\" height=\"50.1018\" x=\"24.6574\" y=\"41.5241\" filterUnits=\"userSpaceOnUse\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feGaussianBlur in=\"BackgroundImage\" stdDeviation=\"7.5\"/><feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur_1_218\"/><feColorMatrix in=\"SourceAlpha\" result=\"hardAlpha\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/><feOffset dx=\"5\" dy=\"5\"/><feGaussianBlur stdDeviation=\"5\"/><feColorMatrix values=\"0 0 0 0 1 0 0 0 0 0.321569 0 0 0 0 0.54902 0 0 0 0.5 0\"/><feBlend in2=\"effect1_backgroundBlur_1_218\" result=\"effect2_dropShadow_1_218\"/><feBlend in=\"SourceGraphic\" in2=\"effect2_dropShadow_1_218\" result=\"shape\"/></filter><linearGradient id=\"b\" x1=\"52.6104\" x2=\"-20.3208\" y1=\"47.058\" y2=\"82.5188\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FF759F\"/><stop offset=\"1\" stop-color=\"#FF196E\"/></linearGradient><linearGradient id=\"e\" x1=\"34\" x2=\"72.6696\" y1=\"41.5848\" y2=\"101.662\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0.25\"/><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/></linearGradient><linearGradient id=\"h\" x1=\"83.4771\" x2=\"68.6938\" y1=\"60.4671\" y2=\"60.7961\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\"/><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0.2\"/></linearGradient><linearGradient id=\"i\" x1=\"73.2649\" x2=\"85.7694\" y1=\"59.2218\" y2=\"69.7921\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0.25\"/><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/></linearGradient><linearGradient id=\"l\" x1=\"58.6824\" x2=\"35.8741\" y1=\"60.1541\" y2=\"60.9116\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\"/><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0.2\"/></linearGradient><linearGradient id=\"m\" x1=\"42.9169\" x2=\"55.6878\" y1=\"58.866\" y2=\"74.9781\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0.25\"/><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/></linearGradient></defs></g>",
	"left": 0,
	"top": 0,
	"width": 104,
	"height": 101
};
export default data;
