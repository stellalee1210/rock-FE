<img src="https://raw.githubusercontent.com/lucykim05/image/main/rock_FE/rock_logo.png"/>

우아한 테크 코스 4주차 &amp; 5주차 오픈 미션

## 목차

1. [**프로젝트 개요**](#1)
2. [**팀원 구성**](#2)
3. [**기술 스택**](#3)
4. [**프로젝트 문서**](#4)
5. [**주요 기능**](#5)

<br />

<div id='1'></div>

## 프로젝트 개요

- 진행 기간 : 2025.11.4 ~ 2025.11.25
- DiscordJS 기반 스터디 헬퍼 봇

<br />

## 주제 선정 이유

- 디스코드로 스터디를 진행하는데 있어 도움을 줄 수 있는 헬퍼 봇을 만들고자 하였습니다.
- 우리가 원하는 기능을 제공하는 봇이었으면 좋겠다는 생각에 직접 구현해보게 되었습니다.
- 블라

<br />

## 프로그램 실행 방법

### 기초 패키지 설정

1. 로컬에 `clone repository` 진행
2. 터미널에 `npm install`입력하여 라이브러리 적용
3. `config.json` 파일 생성 후 아래처럼 bot token 입력하기 (token이 필요한 경우 개발자에게 문의)

```
{
    "token": [token];
}
```

<br />

<div id='2'></div>

## 🧑‍🤝‍🧑 팀원 구성

<div align = 'center'>
    <table>
        <tr>
            <td align = 'center' width = '300'>
                <a href = 'https://github.com/stellalee1210'>
                    <img src = 'https://avatars.githubusercontent.com/u/133227322?v=4' width = '200' />
                    <br />
                    <b>이여빈</b>
                </a>
            </td>
            <td align = 'center' width = '300'>
                <a href = 'https://github.com/lucykim05'>
                    <img src ="https://avatars.githubusercontent.com/u/185035513?v=4" width = '200' />
                    <br />
                    <b>김희주</b>
                </a>
            </td>
        </tr>
        <tr>
            <td align = 'center' valign = 'top'>
                - 프로젝트 세팅<br />
                - 공부 시간 기록 구현<br />
                - 로고 & 봇 디자인
            </td>
            <td align = 'center' valign = 'top'>
                - DB 세팅<br />
                - 노션 세팅<br />
                - 출석 기능 구현<br />
                - 봇 배포
            </td>
        </tr>
    </table>
</div>

<div id='3'></div>

## 🛠️ 기술 스택

### 개발 환경 & 언어

![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=for-the-badge)

### 라이브러리

![discord.js](https://img.shields.io/badge/discord.js-5865F2?logo=discord&logoColor=fff&style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=000&style=for-the-badge)

### 배포 & 협업

![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=fff&style=for-the-badge)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=for-the-badge)
![Notion](https://img.shields.io/badge/Notion-000000?logo=notion&logoColor=fff&style=for-the-badge)

<br />

<div id='4'></div>

## 프로젝트 문서

<table>
    <tr>
        <td align = 'center' width = '200'>
            <a href = 'https://github.com/woowa-discord/rock-FE' target = 'blank'>
                <img src = "https://cdn-icons-png.flaticon.com/512/25/25231.png" width = '80' height = '80' alt = 'repo'/>
            </a>
        </td>
        <td align = 'center' width = '200'>
            <a href = 'https://ancient-shrine-3f1.notion.site/Main-Page-2a1151b029cd80e5a62ee7e896b885fd?source=copy_link' target = 'blank'>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" width = '80' height = '80' alt = 'notion'/>
            </a>
        </td>
    </tr>
    <tr>
        <td align = 'center'>
            <strong>Repository</strong>
        </td>
        <td align = 'center'>
            <strong>Notion</strong>
        </td>
    </tr>
</table>

<br/>

<div id='5'></div>

## 주요 기능

| 출석 체크                                                                                                                   | 출석 현황                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/lucykim05/image/main/rock_FE/KakaoTalk_20251117_163654672_01.gif" width="480"/> | <img src="https://raw.githubusercontent.com/lucykim05/image/main/rock_FE/KakaoTalk_20251117_163654672_02.gif" width="300"/> |

| 출석 순위                                                                                                                | 출석 알람                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/lucykim05/image/main/rock_FE/KakaoTalk_20251117_163654672.gif" width="500"/> | <img src="https://raw.githubusercontent.com/lucykim05/image/main/rock_FE/attendance_alarm.png" alt="attendance alarm" width="500"/> |

### 음성 채널 입퇴장

| 음성채널 입장                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 음성채널 퇴장                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://private-user-images.githubusercontent.com/133227322/515605177-1043646a-a47e-4fb8-8b7e-f7799e935231.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0NTM5NjUsIm5iZiI6MTc2MzQ1MzY2NSwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NjA1MTc3LTEwNDM2NDZhLWE0N2UtNGZiOC04YjdlLWY3Nzk5ZTkzNTIzMS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwODE0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kODZlYzhjZDRjN2JhOGZiOTlmNTY4M2E5ZjM3MmQ5OTJmZTY1MWJiNzIxNjk4YmNjOTMxZmU5ZjBmOWQ1NWM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.cxLkKLDiDWhcs8xCbpG2jOcumFJDI2hCgJ1oM-g6Mso" width="380"/> | <img src="https://private-user-images.githubusercontent.com/133227322/515497885-db79f5c3-8429-4845-9bd3-d4ceb9620475.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0MzcwMzIsIm5iZiI6MTc2MzQzNjczMiwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NDk3ODg1LWRiNzlmNWMzLTg0MjktNDg0NS05YmQzLWQ0Y2ViOTYyMDQ3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwMzMyMTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMjMwNDZlNDQ1MGMwODVlNmY2MTY3MzQ2ZjhlNTI5YmM0NmFmY2E4MzFmYzE1NTY3ZWE5YzEzMmRkNGY4NTY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VWGi-FRaeqRr_9vdPtkytU4G-6AP1UH7rLRET-Yt0Xs" width="500"/> |

### 시간 측정

| 측정 시간 DM 전송  
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://private-user-images.githubusercontent.com/133227322/515499411-539fe04c-62a2-492a-87df-45fb658da927.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0Mzc0NTEsIm5iZiI6MTc2MzQzNzE1MSwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NDk5NDExLTUzOWZlMDRjLTYyYTItNDkyYS04N2RmLTQ1ZmI2NThkYTkyNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwMzM5MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jODE0ZDFiNzNlMjNmZjgwMzgxNWVlNTEwNjFhYjAwMDQwNjFkNWFhMDllNDc4NGY0OGZiMjc1ZDMyZmE0Mjg1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.a1IEK3QCBlWBtk_wReVoQQ8hggm42bCJAAieeUFrN6A" width="500"/> |
<img src="https://private-user-images.githubusercontent.com/133227322/515499410-23b4bc15-1094-4482-9662-ff8694eab17d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0Mzc0NTEsIm5iZiI6MTc2MzQzNzE1MSwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NDk5NDEwLTIzYjRiYzE1LTEwOTQtNDQ4Mi05NjYyLWZmODY5NGVhYjE3ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwMzM5MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kODhhOTQ3OWU0OTFmOGM4MjQwZmFkOTZlY2M1NDlmOWQ1ZjhiMDI2MjU5MDVhMWQ2YjNmNGVjODE4ZDc1NmE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ET3rE7glJd3G0s7gDpMTAH9C8FRJGf6vkve1LNHoTsY" width="700"/> |

### 공부시간 통계

| 명령어 입력 칸                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://private-user-images.githubusercontent.com/133227322/515605176-bde1e4bb-643a-47b5-8e56-e0640bdcce16.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0NTM5NjUsIm5iZiI6MTc2MzQ1MzY2NSwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NjA1MTc2LWJkZTFlNGJiLTY0M2EtNDdiNS04ZTU2LWUwNjQwYmRjY2UxNi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwODE0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMDZkZThjMTc5NTA0NGUwZjViMWVlZDUwOWE5ZmU4ZWVmZDcwMjNlNDQ0ZTRlMjQxMGMxMzlhMzI4YzE0M2IyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.M-tmLX_ABOdXlPrqJyJkXfhBGnafQqbzbA41Pr0OWR8" width="700"/> |

| 공부시간 명령어 별 통계                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://private-user-images.githubusercontent.com/133227322/515605178-bbf3bf09-f6e5-42cd-b09b-993ad6eb8695.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0NTM5NjUsIm5iZiI6MTc2MzQ1MzY2NSwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NjA1MTc4LWJiZjNiZjA5LWY2ZTUtNDJjZC1iMDliLTk5M2FkNmViODY5NS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwODE0MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MjAwNWU5YTRiMzYwZmU1NWZhYjM5YTdkYjYyMDRkZGRkOGZjN2Q3MWY3ZjBlYzIzYTY4MDYyNTliY2EzYmZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.KJntUzDa2L8b-lzMFATk4ZQXKhb7lJOJONGa540j9u0" width="700"/> |

### 오늘의유머

| 공부시간 명령어 별 통계                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://private-user-images.githubusercontent.com/133227322/515610940-4a5f9be2-b2e2-4230-991b-9e189f1c2933.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM0NTQ1MjYsIm5iZiI6MTc2MzQ1NDIyNiwicGF0aCI6Ii8xMzMyMjczMjIvNTE1NjEwOTQwLTRhNWY5YmUyLWIyZTItNDIzMC05OTFiLTllMTg5ZjFjMjkzMy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExOFQwODIzNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYThhNTk5MTEyYWYzMjg3MDc2N2FkMzQxOWM3ZGFhMTIxYWYxMjM4NDRkZDRhYjJiYzdjMDk5MzIzNWE2NDA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NaNXnPE6YP04L9w0Da74v8teYrvFcAPDhXiJNEYC7EY" width="700"/> |

## 플로우 차트
