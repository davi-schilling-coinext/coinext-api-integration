export type UserAuthType = {
  UserId: number
  UserName: string
  Email: string
  PasswordHash: string
  PendingEmailCode: string
  EmailVerified: boolean
  AccountId: number
  DateTimeCreated: string
  AffiliateId: number
  RefererId: number
  OMSId: number
  Use2FA: boolean
  Salt: string
  PendingCodeTime: string
  Locked: boolean
  LockedTime: string
  NumberOfFailedAttempt: number
  MarginBorrowerEnabled: boolean
  MarginAcquisitionHalt: boolean
  OperatorId: number
}

export class UserAuth {
  private SessionToken?: string
  private UserId?: number
  private UserName?: string
  private Email?: string
  private PasswordHash?: string
  private PendingEmailCode?: string
  private EmailVerified?: boolean
  private AccountId?: number
  private DateTimeCreated?: string
  private AffiliateId?: number
  private RefererId?: number
  private OMSId?: number
  private Use2FA?: boolean
  private Salt?: string
  private PendingCodeTime?: string
  private Locked?: boolean
  private LockedTime?: string
  private NumberOfFailedAttempt?: number
  private MarginBorrowerEnabled?: boolean
  private MarginAcquisitionHalt?: boolean
  private OperatorId?: number

  fillSessionToken(SessionToken: string){
    this.SessionToken = SessionToken
  }

  sessionToken(){
    return this.SessionToken
  }

  fillUserId(UserId: string){
    this.UserId = Number(UserId)
  }

  userId(){
    return this.UserId
  }

  fillParams({
    UserId,
    UserName,
    Email,
    PasswordHash,
    PendingEmailCode,
    EmailVerified,
    AccountId,
    DateTimeCreated,
    AffiliateId,
    RefererId,
    OMSId,
    Use2FA,
    Salt,
    PendingCodeTime,
    Locked,
    LockedTime,
    NumberOfFailedAttempt,
    MarginBorrowerEnabled,
    MarginAcquisitionHalt,
    OperatorId,
  }: UserAuthType){
    this.UserId = Number(UserId)
    this.UserName = UserName
    this.Email = Email
    this.PasswordHash = PasswordHash
    this.PendingEmailCode = PendingEmailCode
    this.EmailVerified = !!EmailVerified
    this.AccountId = Number(AccountId)
    this.DateTimeCreated = DateTimeCreated
    this.AffiliateId = Number(AffiliateId)
    this.RefererId = Number(RefererId)
    this.OMSId = Number(OMSId)
    this.Use2FA = !!Use2FA
    this.Salt = Salt
    this.PendingCodeTime = PendingCodeTime
    this.Locked = !!Locked
    this.LockedTime = LockedTime
    this.NumberOfFailedAttempt = Number(NumberOfFailedAttempt)
    this.MarginBorrowerEnabled = !!MarginBorrowerEnabled
    this.MarginAcquisitionHalt = !!MarginAcquisitionHalt
    this.OperatorId = Number(OperatorId)
  }

  userName(){
    return this.UserName
  }
  email(){
    return this.Email
  }
  passwordHash(){
    return this.PasswordHash
  }
  pendingEmailCode(){
    return this.PendingEmailCode
  }
  emailVerified(){
    return this.EmailVerified
  }
  accountId(){
    return this.AccountId
  }
  dateTimeCreated(){
    return this.DateTimeCreated
  }
  affiliateId(){
    return this.AffiliateId
  }
  refererId(){
    return this.RefererId
  }
  oMSId(){
    return this.OMSId
  }
  use2FA(){
    return this.Use2FA
  }
  salt(){
    return this.Salt
  }
  pendingCodeTime(){
    return this.PendingCodeTime
  }
  locked(){
    return this.Locked
  }
  lockedTime(){
    return this.LockedTime
  }
  numberOfFailedAttempt(){
    return this.NumberOfFailedAttempt
  }
  marginBorrowerEnabled(){
    return this.MarginBorrowerEnabled
  }
  marginAcquisitionHalt(){
    return this.MarginAcquisitionHalt
  }
  operatorId(){
    return this.OperatorId
  }
}
