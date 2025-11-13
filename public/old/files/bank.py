import os
import time
os.system("cls" if os.name == "nt" else "clear")
usernames = []
passwords = []
saldo = []
login = False
selected = ""
admin = False
konto = ""
id = 0

def printscreen():
	os.system("cls" if os.name == "nt" else "clear")
	print("")
	if admin == True:
		print("------------ ADMIN ------------")
		print("Selected:" + str(konto))
		print("")
		print("IDS: " + str(id))
		print("Usernames: " + str(usernames))
		print("Passwords: " + str(passwords))
		print("Saldo: " + str(saldo))
	print("")
	print("Velkommen til din online bank!")
	if login==False:
		print("Du er ikke logget ind.")
	else:
		print("Du er logget ind.")
	print("")
	print("")

	time.sleep(0.5)

print("Systemet Starter: 0%")
time.sleep(0.25)
print("Systemet Starter: 7%")
time.sleep(0.25)
print("Systemet Starter: 14%")
time.sleep(0.25)
print("Systemet Starter: 21%")
time.sleep(0.25)
print("Systemet Starter: 30%")
time.sleep(0.25)
print("Systemet Starter: 46%")
time.sleep(0.25)
print("Systemet Starter: 59%")
time.sleep(0.25)
print("Systemet Starter: 66%")
time.sleep(0.25)
print("Systemet Starter: 71%")
time.sleep(0.25)
print("Systemet Starter: 80%")
time.sleep(0.25)
print("Systemet Starter: 93%")
time.sleep(0.25)
print("Systemet Starter: 100%")
time.sleep(0.25)

while True:
	if login == False:
		if selected == "":
			printscreen()
			print("")
			print("-------------------------------")
			print("MENU")
			print("")
			selected = input("Indtast dit valg (login eller opret): ")
		if selected == "login" or selected == "opret" or selected == "admin":
			if selected == "admin":
				print("")
				if admin == True:
					admin = False
					print("Du har nu forladt ADMIN PANELET!")
				else:
					admin = True
					print("Du har nu tilslutted dig ADMIN PANELET!")
				selected = ""
				time.sleep(2)
			if selected == "login":
				printscreen()
				print("")
				print("-------------------------------")
				print("LOGIN")
				print("")
				bruger = input("Indtast dit brugernavn: ")
				kode = input("Indtast dit adgangskode: ")

				err = True
				id2 = None

				for username in usernames:
					if bruger in username:
						for password in passwords:
							if kode in password:
								if bruger in password:
									err = False
									break
				
				if kode is "" or bruger is "":
					err = True
				
				printscreen()
				if err==False:
					login = True
					konto = bruger
					entered = kode
					print("Du er nu logget ind som brugeren " + bruger + ".")
					time.sleep(2)
				else:
					print("Login Fejl: Du har indtasted en bruger eller adgangskode forkert!")
					select2 = input("Ville du gerne opprette en konto? ")

					if select2 == "ja":
						selected = "opret"
			if selected == "opret":
				printscreen()
				print("")
				print("-------------------------------")
				print("OPRET KONTO")
				print("")
				bruger = input("Indtast brugernavn: ")
				kode = input("Indtast adgangskode: ")
				printscreen()
				found = False
				for username in usernames:
					if bruger in username:
						found = True
						break
				
				if found==True:
					print("Opret Fejl: Der findes allerade en konto med navnet " + bruger + "!")
				else:
					id += 1
					get = bruger + "-" + str(id)
					usernames.append(get)
					get = kode + "-" + bruger
					passwords.append(get)
					get = "10-" + bruger
					saldo.append(get)
					selected = ""
					print("Login Oppreted")
				time.sleep(2)
		else:
			printscreen()
			print("Denne type findes ikke!")
			selected = ""
			time.sleep(2)
	elif login == True:
		selected = ""
		printscreen()
		print("")
		print("-------------------------------")
		print("Bruger: " + konto)
		print("")
		print("VÆLG FØLGNE:")
		print(" - info")
		print(" - saldo")
		print(" - udbetal")
		print(" - indbetal")
		print(" - slet")
		print(" - log ud")
		print("")
		selected = input("Indtast dit valg: ")

		if selected=="info" or selected=="saldo" or selected=="udbetal" or selected=="indbetal" or selected=="log ud" or selected=="slet":
			if selected=="slet":
				id2 = None
				for username in usernames:
					if konto in username:
						id2 = username.split("-")[1]
						break
				id -= 1
				get = str(konto + "-" + str(id2))
				if usernames.count(get)==0:
					get = str(konto + "-" + str(int(id2)+1))
				usernames.remove(get)
				get = str(entered + "-" + konto)
				passwords.remove(get)
				get = "10-" + konto
				saldo.remove(get)
				login = False
				selected = ""
				konto = ""
				printscreen()
				print("Du har nu sletted og logget ud af din konto.")
				time.sleep(2)


			if selected=="indbetal":
				id2 = None
				for username in usernames:
					if konto in username:
						id2 = username.split("-")[1]
						break
				
				value = ""
				for saldo2 in saldo:
					if konto in saldo2:
						value = str(saldo2.split("-")[0])
						break

				printscreen()
				print("")
				print("-------------------------------")
				print("INDBETAL")
				print("")
				indbetal = input("Indtast mængde: ")
				for saldo2 in saldo:
					if konto in saldo2:
						oldsaldo = saldo2
						calc=int(value)+int(indbetal)
						saldo2=str(calc) + "-" + konto
						value=saldo2.split("-")[0]
						saldo.remove(oldsaldo)
						saldo.append(saldo2)
						break
				printscreen()
				print("Du har nu indbetalt " + indbetal + "$, og har nu " + value + "$ på kontoen.")
				time.sleep(2)

			if selected=="udbetal":
				id2 = None
				for username in usernames:
					if konto in username:
						id2 = username.split("-")[1]
						break
				
				value = ""
				for saldo2 in saldo:
					if konto in saldo2:
						value = str(saldo2.split("-")[0])
						break
				printscreen()
				print("")
				print("-------------------------------")
				print("UDBETAL")
				print("")
				udbetal = input("Indtast mængde: ")
				if int(udbetal)<=int(value):
					for saldo2 in saldo:
						if konto in saldo2:
							oldsaldo = saldo2
							calc=int(value)-int(udbetal)
							saldo2=str(calc) + "-" + konto
							value=saldo2.split("-")[0]
							saldo.remove(oldsaldo)
							saldo.append(saldo2)
							break
					printscreen()
					print("Du har nu udbetalt " + udbetal + "$, og har " + value + "$ tilbage.")
				else:
					printscreen()
					print("Du har ikke nok til at udbetale " + udbetal + "$.")
				time.sleep(2)

			if selected=="log ud":
				login = False
				selected = ""
				konto = ""
				printscreen()
				print("Du er nu logget ud af din konto.")
				time.sleep(2)

			if selected=="saldo":
				id2 = None
				for username in usernames:
					if konto in username:
						id2 = username.split("-")[1]
						break
				
				value = 0
				for saldo2 in saldo:
					if konto in saldo2:
						value = saldo2.split("-")[0]
						break
				printscreen()
				print("")
				print("-------------------------------")
				print("SALDO")
				print("")
				print(" " + value + "$")
				print("")
				print("-------------------------------")
				print("")
				select2 = input("Click enter for at gå tilbage. ")
				selected = ""
			if selected=="info":
				brugernavn = None
				id2 = None
				for username in usernames:
					if konto in username:
						brugernavn = username.split("-")[0]
						id2 = username.split("-")[1]
						break
				printscreen()
				print("")
				print("-------------------------------")
				print("INFO")
				print("")
				print("ID: " + id2)
				print("Brugernavn: " + brugernavn)
				print("Adgangskode: " + kode)
				print("")
				print("-------------------------------")
				print("")
				select2 = input("Click enter for at gå tilbage. ")
				selected = ""
		else:
			printscreen()
			print("Denne type findes ikke!")
			time.sleep(2)